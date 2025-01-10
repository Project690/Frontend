import React, { useState } from "react";
import Header from "../components/Header";


// A configuration object (questionsConfig) defines the questions for each category (e.g., Books, Dorms, Clothing). Each category has an array of questions with properties like key, label, type, and conditional logic for dynamic rendering.
const questionsConfig = {
  Books: [
    { key: "course", label: "What course is this book for?", moreText: "text",  type: "dropdown", options: ["CS", "Accounting", "Medical", "Chemistry","Physics", "Mathematics", "Economics", "Finance"], important: true },
    { key: "book_title", label: "What's the title of the book?", moreText: "If it’s 'How to Pass Without Reading', we’re sold!", type: "text", important: true },
    { key: "isbn", label: "Do you know the ISBN?", moreText:"It's okay if you don't. Who needs ISBNs, anyway?", type: "text", important: false },
    
  ],
  Dorms: [
    {
      key: "item_type",
      label: "What is it that we're selling today?",
      moreText: "MoreText",
      type: "dropdown",
      options: ["Elecronics", "Decor"],
      important: true,
    },
    {
      key: "electronics_type",
      label: "What is it that we're selling today?",
      moreText: "MoreText",
      type: "dropdown",
      options: ["Microwave", "Fridge", "Lamp"],
      important: true, conditional: (answers) => answers.item_type !== "Decor"
    },
    // Conditional logic for "Decor" only showing dropdown
    { key: "brand", label: "What’s the brand?", moreText: "No Knockoffs, Please!", type: "text", conditional: (answers) => answers.item_type !== "Decor" },
    { key: "size", label: "How big is it?", moreText: "Size matters apparently", type: "text", conditional: (answers) => answers.item_type !== "Decor" },
    { key: "color", label: "What color is it?" , moreText: "", type: "text", conditional: (answers) => answers.item_type !== "Decor" },
  ],
  Clothing: [
    { key: "gender", label: "Who's this for?", moreText: "If it's for your pet, we are still working on that", type: "dropdown", options: ["Men", "Women", "Unisex"], important: true,},
    {
      key: "type",
      label: "What type of clothing?",
      moreText: "Used socks don't count",
      type: "dropdown",
      options: ["Shirt", "Trousers", "Shoes"],
      important: true,

    },
    { key: "brand", label: "What’s the brand? (No knockoffs, please!)", moreText: "If it’s 'Homemade by Mom', we’ll take two!", type: "text" },
    { key: "size", label: "Whats the Size?", moreText: "It matters!",  type: "text", important: true,},
    { key: "color", label: "What color is this?", moreText: "", type: "text", important: true, },
  ],
  Bikes: [
    { key: "gender", label: "Who's this bike for?", moreText: "If its for your pet, we are still working on that!", type: "dropdown", options: ["Male", "Female", "Unisex"] },
    { key: "brand", label: "What's the Brand of this Bike?" , moreText: "Just write Walmart if you don't know", type: "text", important: false, },
    { key: "size", label: "How big is it?", moreText: "Size matters", type: "text", important: false,},
    { key: "color", label: "What Color is your Bike?", moreText: "-Andrew Tate", type: "text", important: true,},
  ],
  Electronics: [
    {
      key: "item_type",
      label: "What is it that we're selling today?",
      moreText: "",
      type: "dropdown",
      options: ["Phone", "Laptops", "Accessories"],
      important: true,
    },
    // Conditional logic for "Accessories" showing only type dropdown and brand
    { 
      key: "accesssory_type", 
      label: "What Type of Accessory?", 
      moreText: "", 
      type: "dropdown", 
      options: ["Cables", "Chargers", "Covers"], 
      conditional: (answers) => answers.item_type === "Accessories" 
    },
    { 
      key: "brand", 
      label: "What Brand is this?", 
      moreText: "Write Temu if you don't remember", 
      type: "text", 
      conditional: (answers) => answers.item_type !== "Decor" 
    },
    { 
      key: "color", 
      label: "What Color is this?", 
      moreText: "I don't know who needs to know this", 
      type: "text", 
      conditional: (answers) => answers.item_type !== "Accessories" 
    },
    { 
      key: "size", 
      label: "What's the Size?", 
      moreText: "", 
      type: "text", 
      conditional: (answers) => answers.item_type !== "Accessories" 
    },
    { 
      key: "storage", 
      label: "What's the Storage?", 
      moreText: "", 
      type: "text", 
      conditional: (answers) => answers.item_type !== "Accessories" 
    },
    { 
      key: "model_year", 
      label: "Model Year", 
      type: "text", 
      conditional: (answers) => answers.item_type !== "Accessories" 
    },
  ],
  Common: [
    { key: "title", label: "Title of the Ad", moreText: "This will appear in the front, keep it decent", type: "text", important: false, },
    { key: "description", label: "Additional Description", moreText: "In case you're feeling chatty today", type: "textarea" },
    { key: "month_bought", label: "When did you buy this?", moreText: "", type: "month",important: false, },
    { key: "condition", label: "What is the Condition of this?", moreText: "", type: "dropdown", options: ["New", "Good", "Fair", "Poor"], important: false, },
    { key: "price", label: "How Much?", moreText: "", type: "number", important: false, },
    { key: "pictures", label: "Upload Pictures", moreText: "No selfies please!", type: "file", important: false, },
  ],
};

const PostPage = () => {
  //State variables are initialized to manage the selected category, user answers, and the current question index.
  const [category, setCategory] = useState("");
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormDisappearing, setIsFormDisappearing] = useState(false);
// Updates the selected category and resets the answers and question index when the category changes.

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setAnswers({});
    setCurrentQuestionIndex(0);
  };


//  Updates the answers state when the user inputs or selects a value for a question
  const handleAnswerChange = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };
  
  const fileUpload = (event) => {
    const files = event.target.files;
    const filesLength = files.length;
  
    if (filesLength > 0) {
      const uploadedFiles = Array.from(files).slice(0, 4); // Limit to 4 files
      const imagePreviews = uploadedFiles.map(file => URL.createObjectURL(file));
  
      setAnswers((prevState) => ({
        ...prevState,
        pictures: [...(prevState.pictures || []), ...uploadedFiles], // Store file objects
        picturePreviews: [...(prevState.picturePreviews || []), ...imagePreviews], // Store preview URLs
      }));
    }
  };


   //Filters questions based on the selected category and conditional logic, appending common questions to the list.

   const getQuestions = () => {
    if (!category) return [];
    const baseQuestions = questionsConfig[category];
    const filteredQuestions = baseQuestions.filter(
      (question) => 
        !question.conditional || 
        (question.conditional && question.conditional(answers))
    );
    return [...filteredQuestions, ...questionsConfig.Common];
  };

  // Dynamically renders the current question based on its type (text, dropdown, file, month, textarea). Handles file upload previews and conditional rendering.
  const renderCurrentQuestion = () => {
    const questions = getQuestions();
    const currentQuestion = questions[currentQuestionIndex];

    if (!currentQuestion) return null;

    return (
      <div className="form-group">
        <label className="text-[20px] md:text-[24px] lg:text-[26px] font-medium">{currentQuestion.label}{currentQuestion.important && ( <span className="ml-[0.3em] font-light text-[red]">*</span>)}</label>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#6c3675] pt-[0.2em]">{currentQuestion.moreText}</p>


        {currentQuestion.type === "text" && (
          <input
            type="text"
            value={answers[currentQuestion.key] || ""}
            onChange={(e) => handleAnswerChange(currentQuestion.key, e.target.value)}
          />
        )}
        {currentQuestion.type === "number" && (
        <div className="flex">
          <input
            type="number"
            value={answers[currentQuestion.key] || ""}
            onChange={(e) => handleAnswerChange(currentQuestion.key, e.target.value)}
          />
          {currentQuestion.key === "price" && (
            <div className="flex items-center border-[#CFCFCF] border-[1px] px-[1em] w-fit my-[1em] bg-[#fff] text-[16px] md:text-[18px] lg:text-[20px] border-l-0">
              <input
                type="checkbox"
                className=""
                checked={answers["negotiable"] || false}
                onChange={(e) => handleAnswerChange("negotiable", e.target.checked)}
              />
              <label className="ml-[0.5em] font-light text-[0.8em]">Flexible?</label>
            </div>
          )}
        </div>
      )}

        {currentQuestion.type === "dropdown" && (
          <select className="minimal"
            value={answers[currentQuestion.key] || ""}
            onChange={(e) => handleAnswerChange(currentQuestion.key, e.target.value)}
          >
            <option value="">Select</option>
            {currentQuestion.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
        
        {currentQuestion.type === "file" && (

<div className=''>
<div className="tb-containerr w-full mx-auto border-[2px] border-[black] text-[black] text-[20px] py-[40px] rounded-[8px] mt-[1em]">
<div className="tb-img-vieww w-full flex flex-wrap gap-[0.5vw] mb-[30px] justify-center px-[10vw] md:px-[5vw]">
{answers.picturePreviews?.map((preview, index) => (
  <div key={index} className="relative">
    <img src={preview} alt={`Uploaded ${index + 1}`} className="w-[25vw] md:w-[12vw] object-cover border-[1px] border-grayy" />
    <button 
      onClick={() => {
        const updatedPreviews = [...answers.picturePreviews];
        const updatedFiles = [...answers.pictures];
        updatedPreviews.splice(index, 1);
        updatedFiles.splice(index, 1);
        setAnswers((prevState) => ({
          ...prevState,
          pictures: updatedFiles,
          picturePreviews: updatedPreviews,
        }));
      }}
      className="absolute top-[10px] right-[10px] bg-red-500 text-white rounded-full w-[20px] h-[20px] flex items-center justify-center leading-[1em]"
    >
      <svg fill="#fff" className="h-[10px]" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xmlSspace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path> </g></svg>
    </button>
  </div>
))}
      </div>
<label htmlFor="tb-file-upload" className='flexCol mx-auto text-center items-center'>
<svg className='w-[2.5em] ' viewBox="0 0 29 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.6706 25.4118C27.6706 29.4608 24.3784 32.753 20.3294 32.753C16.2805 32.753 12.9883 29.4608 12.9883 25.4118C12.9883 21.3629 16.2805 18.0707 20.3294 18.0707C24.3784 18.0707 27.6706 21.3629 27.6706 25.4118Z" fill="white"/>
<path d="M24.283 24.8471H20.8948V21.4588C20.8948 21.1472 20.6418 20.8942 20.3301 20.8942C20.0184 20.8942 19.7654 21.1472 19.7654 21.4588V24.8471H16.3772C16.0655 24.8471 15.8125 25.1001 15.8125 25.4118C15.8125 25.7235 16.0655 25.9765 16.3772 25.9765H19.7654V29.3647C19.7654 29.6764 20.0184 29.9294 20.3301 29.9294C20.6418 29.9294 20.8948 29.6764 20.8948 29.3647V25.9765H24.283C24.5947 25.9765 24.8477 25.7235 24.8477 25.4118C24.8477 25.1001 24.5948 24.8471 24.283 24.8471Z" fill="black"/>
<path d="M28.1512 22.1647C27.2363 19.9623 25.4123 18.2287 23.1535 17.4268C22.2726 17.1106 21.3239 16.9412 20.33 16.9412C16.8118 16.9412 13.7907 19.0983 12.5088 22.159C12.0909 23.1586 11.8594 24.2598 11.8594 25.4118C11.8594 25.5247 11.8594 25.6376 11.865 25.7506C11.9553 28.0659 12.9887 30.1497 14.5812 31.6235C16.0947 33.0297 18.1107 33.8824 20.33 33.8824C24.8871 33.8824 28.6142 30.2683 28.7892 25.7562C28.8006 25.6432 28.8006 25.5247 28.8006 25.4118C28.8006 24.2598 28.569 23.1642 28.1512 22.1647ZM26.7846 28.9073C25.5422 31.1943 23.1139 32.7529 20.33 32.7529C17.5403 32.7529 15.1121 31.1943 13.8698 28.8959C13.3107 27.8569 12.9888 26.671 12.9888 25.4117V25.327C13.034 21.3175 16.3093 18.0705 20.33 18.0705C21.3295 18.0705 22.2838 18.2738 23.1535 18.6352C25.7794 19.7308 27.6373 22.3115 27.6655 25.327C27.6711 25.3552 27.6711 25.3834 27.6711 25.4117C27.6711 26.671 27.3492 27.8625 26.7902 28.9016C26.7846 28.9073 26.7846 28.9073 26.7846 28.9073Z" fill="black"/>
<path d="M12.9882 31.6236C12.9882 31.9342 12.7341 32.1883 12.4235 32.1883H0.564684C0.254118 32.1883 0 31.9342 0 31.6236V27.1059C0 26.7954 0.254118 26.5413 0.564684 26.5413C0.87525 26.5413 1.12937 26.7954 1.12937 27.1059V31.0589H12.4235C12.7341 31.0589 12.9882 31.313 12.9882 31.6236Z" fill="black"/>
<path d="M1.12937 24.847C1.12937 25.1576 0.880876 25.4117 0.570309 25.4117H0.564684C0.254118 25.4117 0 25.1576 0 24.847C0 24.5365 0.254118 24.2823 0.564684 24.2823C0.87525 24.2823 1.12937 24.5364 1.12937 24.847Z" fill="black"/>
<path d="M23.5539 9.19906L14.5186 0.163787C14.4113 0.0621397 14.2701 0 14.1176 0H0.564684C0.254118 0 0 0.254118 0 0.564684V22.5882C0 22.8988 0.254118 23.1529 0.564684 23.1529C0.87525 23.1529 1.12937 22.8988 1.12937 22.5882V1.12943H13.5529V9.60003C13.5529 9.91059 13.8071 10.1647 14.1176 10.1647H22.5882V15.2471C22.5882 15.5576 22.8423 15.8118 23.1529 15.8118C23.3731 15.8118 23.5651 15.6875 23.6555 15.5012C23.695 15.4221 23.7177 15.3374 23.7177 15.2471V9.60003C23.7177 9.44756 23.6555 9.30634 23.5539 9.19906ZM14.6824 9.03528V1.92567L21.7921 9.03534L14.6824 9.03528Z" fill="black"/>
<path d="M19.7646 10.1647V9.59998" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10"/>
</svg>

Select Image
</label>
<input 
        type="file" 
        id="tb-file-upload" 
        accept="image/*" 
        onChange={(e) => fileUpload(e)} 
        multiple 
        disabled={answers.pictures?.length >= 4} // Disable if 4 pictures are uploaded
      />
</div>
</div>
        )}
        {currentQuestion.type === "month" && (
          <input
            type="month"
            value={answers[currentQuestion.key] || ""}
            onChange={(e) => handleAnswerChange(currentQuestion.key, e.target.value)}
          />
        )}
        {currentQuestion.type === "textarea" && (
          <textarea
            rows="4"
            value={answers[currentQuestion.key] || ""}
            onChange={(e) => handleAnswerChange(currentQuestion.key, e.target.value)}
          />
        )}
      </div>
    );
  };

  // Navigates to the previous question, handling edge cases like returning to the category selection or skipping invalid questions.
  const goToPreviousQuestion = () => {
    if (currentQuestionIndex === 0) {
      return; // Already at the first question, nothing to go back to.
    }

    const questions = getQuestions();

    // Decrement the index and handle dynamic steps like returning to category
    let newIndex = currentQuestionIndex - 1;

    // Handle going back to category selection
    if (newIndex < 0 || (questions.length === 0 && category)) {
      setCategory("");
      setCurrentQuestionIndex(0);
      return;
    }

    // Find a valid question that passes any conditional logic
    while (newIndex > 0 && questions[newIndex].conditional && !questions[newIndex].conditional(answers)) {
      newIndex--;
    }

    setCurrentQuestionIndex(newIndex);
  };
  const generateSearchKeywords = (category, answers) => {
    let keywords = [category]; // Always include the base category
  
    switch (category) {
      case "Clothing":
        if (answers.gender) keywords.push(`${category}/${answers.gender}`);
        if (answers.type) keywords.push(`${category}/${answers.gender}/${answers.type}`);
        break;
  
      case "Dorms":
        if (answers.item_type) keywords.push(`${category}/${answers.item_type}`);
        if (answers.electronics_type) keywords.push(`${category}/${answers.item_type}/${answers.electronics_type}`);
        break;
  
      case "Books":
        if (answers.course) keywords.push(`${category}/${answers.course}`);
        break;
  
      case "Bikes":
        if (answers.gender) keywords.push(`${category}/${answers.gender}`);
        break;
  
      case "Electronics":
        if (answers.item_type) keywords.push(`${category}/${answers.item_type}`);
        if (answers.accesssory_type) keywords.push(`${category}/${answers.item_type}/${answers.accesssory_type}`);
        break;
  
      default:
        break;
    }
  
    return keywords.join(", "); // Convert array to comma-separated string
  };
  const handleSubmit = () => {
    const searchKeywords = generateSearchKeywords(category, answers);
    const submittedData = {
      category,
      ...answers,
      pictures: answers.pictures,
      searchKeywords,
    };
  
    console.log("Submitted Data:", submittedData);
  
    // Set submission status to true
    setIsFormDisappearing(true); // Trigger form disappearance animation

  // Wait for the form disappearance animation to complete
  setTimeout(() => {
    setIsSubmitted(true); // Show full-screen message
  }, 500); 
  };

  const questions = getQuestions();

  return (
    <>
        <Header/>

    <div className="post-page py-[10vh] ">
    {!isSubmitted && (
    <div className={`postForm px-[9vw] md:px-[7vw] py-[5vh] md:py-[10vh] rounded-[15px] md:rounded-[20px] ${isFormDisappearing ? 'form-disappear' : ''}`}>
    <h2 className="font-semibold pb-[1em] text-center">Post an Item</h2>

      {!category && (
        <div className="form-group">
          <label className="text-[20px] font-medium md:text-[24px] lg:text-[26px]">Select a Category</label>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#6c3675]">Please</p>

          <select value={category} onChange={handleCategoryChange} className="minimal">
            <option value="">Select a category</option>
            {Object.keys(questionsConfig).filter(cat => cat !== "Common").map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      )}

      {category && currentQuestionIndex < questions.length && (
        <>
          {renderCurrentQuestion()}
          <div className="button-group flex gap-[1em] justify-end mt-[1em]">
            <button
              onClick={goToPreviousQuestion}
              className="notSolidBtn"
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
              disabled={
                questions[currentQuestionIndex]?.important && 
                !answers[questions[currentQuestionIndex]?.key]
              }
  className="solidBtn"
>
  Next
</button>
          </div>
        </>
      )}


{/* THis is to render the whole form before they submit it */}
{category && currentQuestionIndex >= questions.length && (
  <div className="form-review">
    <h3 className="pb-[1em]">Review</h3>
    {questions.map((question, index) => (
      <div key={index} className="form-group">
        <label className="mt-[0.5em]">{question.label}</label>
        
        {/* Render text input for price */}
        {question.key === "price" && (
          <div className="flex">
            <input
              type="text"
              value={answers[question.key] || ""}
              readOnly
            />
            {/* Render negotiable checkbox */}
            {answers["negotiable"] && (
              <div className="flex items-center border-[#CFCFCF] border-[1px] px-[1em] w-fit my-[1em] bg-[#fff] text-[16px] md:text-[18px] lg:text-[20px]">
                <input
                  type="checkbox"
                  checked={answers["negotiable"] || false}
                  readOnly
                />
                <label className="ml-[0.5em] font-light">Negotiable?</label>
              </div>
            )}
          </div>
        )}
        
        {/* Render other question types */}
        {question.type === "text" && question.key !== "price" && (
          <input
            type="text"
            value={answers[question.key] || ""}
            readOnly
          />
        )}
        
        {question.type === "dropdown" && (
          <select className="minimal" value={answers[question.key] || ""} disabled>
            <option value="">Select</option>
            {question.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
        
        {question.type === "file" && (
          <div className="tb-containerr w-full mx-auto border-[2px] border-[black] text-[black] text-[20px] py-[40px] rounded-[8px] mt-[1em]">
            <div className="tb-img-vieww w-full flex flex-wrap gap-[0.5vw] mb-[30px] justify-center px-[10vw] md:px-[5vw]">
              {answers.picturePreviews?.map((preview, index) => (
                <div key={index} className="relative">
                  <img src={preview} alt={`Uploaded ${index + 1}`} className="w-[25vw] md:w-[12vw] object-cover border-[1px] border-grayy" />
                </div>
              ))}
            </div>
          </div>
        )}
        
        {question.type === "month" && (
          <input
            type="month"
            value={answers[question.key] || ""}
            readOnly
          />
        )}
        
        {question.type === "textarea" && (
          <textarea
            rows="4"
            value={answers[question.key] || ""}
            readOnly
          />
        )}
      </div>
    ))}
    <div className="button-group flex gap-[1em] justify-end mt-[2em]">
      <button onClick={goToPreviousQuestion} className="notSolidBtn">
        Wanna go back?
      </button>
      <button onClick={handleSubmit} className="solidBtn">Looks Good</button>
      </div>
            </div>
          )}
        </div>
      )}

      {/* Full-Screen Submission Message */}
      {isSubmitted && (
        <div className={`submission-message w-full h-full ${isSubmitted ? 'visible' : ''}`}>
          <h2 className="text-primary text-center text-[24px] sm:text-[26px] md:text-[30px] lg:text-[44px]">You made it!</h2><br/>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">We are Proud of you :)</p><br/>
          <a href="/" className="solidBtn">Go to HomePage</a>
        </div>
      )}
    </div>
  </>
);
};

export default PostPage;