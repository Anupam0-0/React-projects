const dummyData = {
  showAccordian: false,
  showForms: true,
  showParagraphGenerator: true,
  showQrCode: true,
};

function featureFlag() {
  return new Promise((resolve, reject) => {
    if (dummyData) setTimeout(resolve(dummyData), 1000);
    else reject("Error: Something went wrong");
  });
}


export default featureFlag;