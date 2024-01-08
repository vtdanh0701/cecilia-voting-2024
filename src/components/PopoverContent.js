const PopoverContent = ({ text }) => {
    // Splitting the text by newline and mapping to JSX elements
    const content = text?.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br/>
      </span>
    ));
  
    return <>{content}</>;
  };

  export default PopoverContent;