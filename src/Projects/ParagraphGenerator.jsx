// App.js
import React, { useState } from "react";

// Individual Components
const WordCountInput = ({ length, setLength }) => (
  <input
    type="number"
    placeholder="Enter word count"
    className="border rounded text-black p-2 w-64 shadow-lg"
    value={length}
    onChange={(e) => setLength(e.target.value)}
  />
);

const CharLimitInput = ({ charLimit, setCharLimit }) => (
  <input
    type="number"
    placeholder="Enter character limit"
    className="border rounded text-black p-2 w-64 shadow-lg"
    value={charLimit}
    onChange={(e) => setCharLimit(e.target.value)}
  />
);

const NumParagraphsInput = ({ numParagraphs, setNumParagraphs }) => (
  <input
    type="number"
    placeholder="Enter number of paragraphs"
    className="border rounded text-black p-2 w-64 shadow-lg"
    value={numParagraphs}
    onChange={(e) => setNumParagraphs(e.target.value)}
  />
);

const CustomWordsInput = ({ customWords, setCustomWords }) => (
  <textarea
    placeholder="Enter custom words, separated by commas"
    className="border rounded text-black p-2 w-64 h-20 shadow-lg"
    value={customWords}
    onChange={(e) => setCustomWords(e.target.value)}
  />
);

const GenerateButton = ({ onGenerate }) => (
  <button
    className="bg-blue-500 text-white px-4 py-2 rounded shadow-xl hover:bg-blue-600"
    onClick={onGenerate}
  >
    Generate
  </button>
);

const CopyButton = ({ paragraph }) => (
  <button
    className="bg-green-500 text-white px-4 py-2 rounded shadow-lg hover:bg-green-600"
    onClick={() => {
      navigator.clipboard.writeText(paragraph);
      alert("Copied to clipboard!");
    }}
  >
    Copy to Clipboard
  </button>
);

const SaveButton = ({ paragraph }) => (
  <button
    className="bg-purple-500 text-white px-4 py-2 rounded shadow-lg hover:bg-purple-600"
    onClick={() => {
      const blob = new Blob([paragraph], { type: "text/plain" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "paragraph.txt";
      link.click();
    }}
  >
    Save as File
  </button>
);

const ThemeToggleButton = ({ darkMode, setDarkMode }) => (
  <button
    className="bg-gray-700 shadow-lg text-white px-4 py-2 rounded hover :bg-gray-600"
    onClick={() => setDarkMode(!darkMode)}
  >
    {darkMode ? "Light Mode" : "Dark Mode"}
  </button>
);

const ParagraphDisplay = ({ paragraph }) => (
  <p className="my-3 p-4 text-black bg-gray-100 rounded prose shadow-md">{paragraph}</p>
);

// Main App Component
function ParagraphGenerator() {
  const [length, setLength] = useState("");
  const [charLimit, setCharLimit] = useState("");
  const [numParagraphs, setNumParagraphs] = useState(1);
  const [customWords, setCustomWords] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const generateParagraph = () => {
    const words = customWords
      ? customWords.split(",")
      : "Lorem ipsum dolor sit amet consectetur adipiscing elit".split(" ");
    const paragraphs = Array.from({ length: parseInt(numParagraphs) }, () =>
      Array.from({ length: parseInt(length) }, () =>
        words[Math.floor(Math.random() * words.length)]
      ).join(" ")
    );
    let result = paragraphs.join("\n\n");
    if (charLimit && result.length > parseInt(charLimit)) {
      result = result.slice(0, parseInt(charLimit)) + "...";
    }
    setParagraph(result);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? 
        "bg-gradient-to-r from-gray-800 via-slate-700 to-gray-900 text-white" 
            : 
        "bg-gradient-to-r from-blue-200 via-slate-200 to-blue-200 text-black"
      } flex flex-col items-center gap-4 p-6`}
    >
      <h1 className="text-5xl font-mono ">Paragraph Generator</h1>

      <ThemeToggleButton darkMode={darkMode} setDarkMode={setDarkMode} />
      <WordCountInput length={length} setLength={setLength} />
      <CharLimitInput charLimit={charLimit} setCharLimit={setCharLimit} />
      <NumParagraphsInput
        numParagraphs={numParagraphs}
        setNumParagraphs={setNumParagraphs}
      />
      <CustomWordsInput customWords={customWords} setCustomWords={setCustomWords} />
      <GenerateButton onGenerate={generateParagraph} />
      <ParagraphDisplay paragraph={paragraph} />
      <div className="flex gap-5">
      <CopyButton paragraph={paragraph} />
      <SaveButton paragraph={paragraph} />
      </div>
      
    </div>
  );
}

export default ParagraphGenerator;
