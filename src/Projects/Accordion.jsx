import React from "react";

const data = [
  {
    id: "1",
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
  },
  {
    id: "2",
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
  },
  {
    id: "3",
    question: "Accordion as a musical instrument",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
  },
  {
    id: "4",
    question: "Can I create an accordion component with a different framework?",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework.",
  },
];

const Accordion = () => {
  const [selected, setSelected] = React.useState(null);
  const [enableMultiple, setEnableMultiple] = React.useState(false);
  const [multipleSelected, setMultipleSelected] = React.useState([]);

  const handleSingle = (id) => {
    console.log(id);
    setSelected(selected === id ? null : id);
  };

  const handleMultiple = (id) => {
    let newSelected = [...multipleSelected];

    const findIndexOfCurrentId = newSelected.indexOf(id);
    if (findIndexOfCurrentId === -1) {
      newSelected.push(id);
    } else {
      newSelected.splice(findIndexOfCurrentId, 1);
    }

    setMultipleSelected(newSelected);

    // if (newSelected.includes(id)) {
    //   newSelected = newSelected.filter((item) => item !== id);
    // } else {
    //   newSelected.push(id);
    // }
  };

  return (
    <div>
      <h1 className="text-center p-5 mt-2 mb-10 text-5xl">Accordion</h1>
      <div className="flex flex-col items-center gap-6 ">
        <button
          className="py-1 px-5 bg-orange-100 rounded border-2 border-slate-950 active:scale-95"
          onClick={() => setEnableMultiple(!enableMultiple)}
        >
          Enable Multiple Selection
        </button>

        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="w-full px-10 sm:px-28 md:px-40 lg:px-[20vw]">
              <div
                className="bg-green-400 rounded-md"
                onClick={
                  enableMultiple
                    ? () => handleMultiple(item.id)
                    : () => handleSingle(item.id)
                }
                key={item.id}
              >
                <div className="flex justify-between bg-white px-10 py-4 border-2 border-slate-800 rounded-md">
                  <h3>{item.question}</h3>
                  <span>➕</span>
                </div>

                {enableMultiple
                  ? multipleSelected.indexOf(item.id) !== -1 && (
                      <p className="px-7 py-2 pb-3 border-black rounded-b-md bg-green-400">
                        {item.answer}
                      </p>
                    )
                  : selected === item.id && (
                      <p className="px-7 py-2 pb-3 border-black rounded-b-md
                      bg-green-400">                        
                        
                        {item.answer}
                      </p>
                    )}

                {/* {selected === item.id || multipleSelected.indexOf(item.id) !== -1 ? (                ) : null } */}
              </div>
            </div>
          ))
        ) : (
          <h3>No data found</h3>
        )}
      </div>
    </div>
  );
};

export default Accordion;
