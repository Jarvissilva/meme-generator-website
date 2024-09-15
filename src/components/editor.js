"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Draggable from "react-draggable";
import { toPng } from "html-to-image";
import { IoSettings } from "react-icons/io5";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiShare2 } from "react-icons/fi";
import memeGenerators from "data/memeGenerators";

export default function Editor({ img, defaultTexts }) {
  const [meme, setMeme] = useState({
    img: img,
    texts: [...defaultTexts],
  });
  const [displayTextSettings, setDisplayTextSettings] = useState();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => setMeme({ ...meme, img: reader.result });
    if (file) reader.readAsDataURL(file);
  };

  const addTextToMeme = () => {
    setMeme({
      ...meme,
      texts: [
        ...meme.texts,
        {
          value: "Edit Me",
          width: 80,
          fontSize: 60,
          rotate: 0,
          position: { top: 10, left: 10, right: null, bottom: null },
        },
      ],
    });
  };

  const deleteTextFromMeme = (index) => {
    const tempMeme = { ...meme };
    tempMeme.texts.splice(index, 1);
    setMeme(tempMeme);
  };

  const handleTextChange = (e, index) => {
    const updatedMeme = { ...meme };

    if (e.target.name === "value")
      updatedMeme.texts[index].value = e.target.value;
    if (e.target.name === "width") {
      updatedMeme.texts[index].width = parseFloat(e.target.value);
    }
    if (e.target.name === "rotate")
      updatedMeme.texts[index].rotate = parseFloat(e.target.value);
    if (e.target.name === "fontSize")
      updatedMeme.texts[index].fontSize = parseFloat(e.target.value);
    if (e.target.name === "color")
      updatedMeme.texts[index].color = e.target.value;
    setMeme(updatedMeme);
  };

  const generateMeme = () => {
    const memeCanvas = document.getElementById("meme-canvas");

    toPng(memeCanvas)
      .then(function (dataUrl) {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "meme.png";
        link.click();
      })
      .catch(function (error) {
        alert("Could not create the snippet image");
      });
  };

  useEffect(() => {
    if (meme.img) {
      document.getElementById("meme-canvas").style.height =
        document.getElementById("meme-image").offsetHeight + "px";
    }
  }, [meme]);

  return (
    <>
      <div className="flex flex-col gap-5 bg-white p-[clamp(1.25rem,5vw,2rem)] border border-gray-200 rounded-md">
        {!meme.img ? (
          <div className="flex flex-col justify-center items-center h-full gap-2">
            <input
              type="file"
              name="uploadfile"
              id="meme-template"
              accept="image/png"
              onChange={handleImageUpload}
              className="hidden"
            />
            <label
              htmlFor="meme-template"
              className="border border-gray-200 rounded-md p-4 text-lg font-semibold hover:bg-gray-100 cursor-pointer"
            >
              Upload Meme Template
            </label>
            <span>Or</span>
            <div className="text-center space-y-4">
              <p className="font-semibold text-lg">Choose from templates</p>
              <div className="flex flex-wrap  justify-center items-center gap-2 overflow-y-auto">
                {memeGenerators.map((memeGenerator, index) => (
                  <Image
                    width={80}
                    height={80}
                    src={memeGenerator.img}
                    alt={memeGenerator.title}
                    key={index}
                    onClick={() => setMeme({ ...meme, img: memeGenerator.img })}
                    className="cursor-pointer hover:border rounded-md"
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <button
                className="border border-gray-200 py-2 px-4 rounded-md"
                onClick={() => setMeme({ img: "", texts: [] })}
              >
                New
              </button>
              <button
                onClick={() =>
                  navigator.share({
                    title: document.title,
                    url: document.URL,
                  })
                }
                title="Share"
                aria-label="Share"
              >
                <FiShare2 size={25} />
              </button>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-5">
              <div
                id="meme-canvas"
                className="relative lg:w-[50%] overflow-clip"
              >
                {meme.texts.map((mText, index) => (
                  <Draggable bounds="parent" key={index}>
                    <div
                      className={`draggable-text absolute z-20 text-white cursor-move hover:border-2 hover:border-dotted active:border-blue-700 break-words`}
                      style={{
                        width: mText.width + "%",
                        top: mText.position.top + "%",
                        left: mText.position.left + "%",
                        right: mText.position.right + "%",
                        bottom: mText.position.bottom + "%",
                        rotate: mText.rotate + "deg",
                      }}
                    >
                      <p
                        className={`whitespace-pre-wrap tracking-[1px] ${
                          mText.textShadow ? "text-shadow" : ""
                        }  ${mText.styles}`}
                        style={{
                          fontSize: mText.fontSize / 2,
                          color: mText.color,
                        }}
                      >
                        {mText.value}
                      </p>
                    </div>
                  </Draggable>
                ))}
                <Image
                  src={meme.img}
                  alt="meme image"
                  id="meme-image"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
              <div className="lg:w-[50%] space-y-5">
                {meme.texts.map((mText, index) => (
                  <div className="relative flex flex-col gap-2" key={index}>
                    <label htmlFor={`text-${index}`} className="font-bold">
                      Text {index + 1}
                    </label>
                    <div className="flex justify-between items-center gap-4">
                      <textarea
                        name="value"
                        value={mText.value}
                        id={`text-${index}`}
                        placeholder="Enter text"
                        className="border border-gray-200 flex-grow rounded-md p-4 resize-none h-16"
                        onChange={(e) => handleTextChange(e, index)}
                      />
                      {displayTextSettings !== index && (
                        <IoSettings
                          size={25}
                          onClick={() => setDisplayTextSettings(index)}
                        />
                      )}
                      {displayTextSettings === index && (
                        <AiOutlineCloseCircle
                          size={25}
                          onClick={() => setDisplayTextSettings()}
                        />
                      )}
                    </div>
                    {displayTextSettings === index && (
                      <div className="bg-white w-48 border border-gray-200 rounded-md absolute top-20 right-0 z-50 p-5 flex flex-col gap-2">
                        <RiDeleteBin6Line
                          color="red"
                          className="self-end cursor-pointer"
                          size={25}
                          onClick={() => deleteTextFromMeme(index)}
                        />
                        <label className="font-semibold">Width</label>
                        <input
                          type="range"
                          name="width"
                          min={10}
                          max={100}
                          value={mText.width}
                          onChange={(e) => handleTextChange(e, index)}
                        />
                        <label className="font-semibold">Rotate</label>
                        <input
                          type="range"
                          name="rotate"
                          min={0}
                          max={360}
                          value={mText.rotate}
                          onChange={(e) => handleTextChange(e, index)}
                        />
                        <label className="font-semibold">Font Size</label>
                        <input
                          type="number"
                          name="fontSize"
                          min={10}
                          max={300}
                          value={mText.fontSize}
                          className="border border-gray-200 rounded-md p-2"
                          onChange={(e) => handleTextChange(e, index)}
                        />
                        <label className="font-semibold">Color</label>
                        <input
                          type="color"
                          name="color"
                          value={mText.color}
                          className="border border-gray-200 rounded-md p-2"
                          onChange={(e) => handleTextChange(e, index)}
                        />
                      </div>
                    )}
                  </div>
                ))}

                <button
                  className="w-full py-[clamp(0.4rem,5vw,.5rem)] rounded-md border-4 border-gray-200 border-dotted hover:border-blue-500 "
                  onClick={addTextToMeme}
                >
                  Add Text
                </button>
                <button
                  onClick={generateMeme}
                  className="w-full bg-blue-500 text-white font-semibold py-[clamp(0.8rem,5vw,.9rem)] rounded-md hover:bg-blue-600 focus:bg-blue-700 focus:ring focus:ring-blue-300"
                >
                  Generate Meme
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
