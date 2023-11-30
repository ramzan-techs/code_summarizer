function detectAndHighlight() {
  const codeInput = document.getElementById('codeInput').value;
  //const { language, value: highlightedCode } = hljs.highlightAuto(codeInput);
  //alert(`Detected language: ${language}`);
  //document.getElementById('codeInput').value = highlightedCode;
  //hljs.highlightElement(document.getElementById('codeInput'));
  }
  


function summarizeCode() {
    // Get the code input from textarea
    const codeInput = document.getElementById('codeInput').value;
  
    // Simulate generating a summary (replace this with actual logic using Yi-6B or Yi-34B models)
    const generatedSummary = generateSummary(codeInput);
  
    // Display the generated summary
    document.getElementById('summaryOutput').innerText = generatedSummary;
  }
  
  // Placeholder function to simulate generating a summary
  function generateSummary(code) {
    // Simulated summary generation process (replace this with actual logic)
    return "Generated summary for the code snippet will appear here.";
  }

  // Function to update the formattedCode <pre> tag with syntax highlighted code
function updateFormattedCode() {
    const codeInput = document.getElementById('codeInput').value;
    const formattedCode = syntaxHighlight(codeInput);
    document.getElementById('formattedCode').innerHTML = formattedCode;
  }
  
  // Syntax highlighting logic for JavaScript (basic example)
  function syntaxHighlight(code) {
    code = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  
    return code.replace(/(\b(let|const|var|function|return|if|else)\b)/g, '<span style="color: blue;">$1</span>');
    // Add more syntax highlighting rules for other keywords, strings, comments, etc.
  }
  
  // Update the formatted code on input change
  document.getElementById('codeInput').addEventListener('input', updateFormattedCode);
  
  // Initial update of formatted code
  updateFormattedCode();

  