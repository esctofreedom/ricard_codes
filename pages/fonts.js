const Fonts = () => {
  const sampleText =
    "Whereas disregard and contempt for human rights have resulted";
  return (
    <div className="mx-auto max-w-5xl">
      {/* create list of all headings, from h1 to h6 with a sample text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <h1 className="">{sampleText}</h1>
          <h2 className="">{sampleText}</h2>
          <h3 className="">{sampleText}</h3>
          <h4 className="">{sampleText}</h4>
          <h5 className="">{sampleText}</h5>
          <h6 className="">{sampleText}</h6>
        </div>
      </div>
    </div>
  );
};

export default Fonts;
