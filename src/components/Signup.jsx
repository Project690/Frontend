import React, { useState } from 'react';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormDisappearing, setIsFormDisappearing] = useState(false);


  const [formData, setFormData] = useState({
    collegeName: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    profilePhoto: null,
  });

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);
  // Updates the formData state whenever the user types in any input field. It dynamically updates the corresponding field based on the name attribute of the input.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fileUpload = (event) => {
    const files = event.target.files;
    const filesLength = files.length;
    if (filesLength > 0) {
      const imageSrc = URL.createObjectURL(files[0]);
      const imagePreviewElement = document.querySelector("#tb-image");
      imagePreviewElement.src = imageSrc;
      imagePreviewElement.style.display = "block";
      const imageFile = files[0]; // Get the actual file

      setFormData((prevState) => ({
        ...prevState,
        profilePhoto: imageFile, // Store the file object
      }));
  
    }
  };
  
  
// handleSubmit: Prevents the default form submission behavior and logs the formData to the console. In a real-world scenario, this would send the data to a backend server.
const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form Data Submitted:', formData);
  setIsFormDisappearing(true); // Trigger form disappearance animation
    // Wait for the form disappearance animation to complete
    setTimeout(() => {
      setIsSubmitted(true); // Show full-screen message
    }, 500); 
    
};
  return (
    <div className='LoginPage signup-flex'>
      <h2 className='text-[22px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-semibold'>Signup</h2>
      {!isSubmitted && (
      <form onSubmit={handleSubmit} className={`signupform ${isFormDisappearing ? 'form-disappear' : ''}`}>

     { <><div className={`stepdiv ${step === 1 ? 'step-enter-active' : 'step-exit-active'}`}>

        {step === 1 && (
          <div>
            <h3 className='text-[#313131] mt-[2em] pb-[1em]'>College Information</h3>
            <div>
              <label>College Name:</label><br/>
              <input
                type="text"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email Address:</label><br/>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}</div>
                <div className={`stepdiv ${step === 2 ? 'step-enter-active' : 'step-exit-active'}`}>

        {step === 2 && (
          <div className=''>
            <h3 className='text-[#313131] mt-[2em] pb-[1em]'>Personal Information</h3>

            <div>
              <label>First Name:</label><br/>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Last Name:</label><br/>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Password:</label><br/>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}</div>
                <div className={`stepdiv ${step === 3 ? 'step-enter-active' : 'step-exit-active'}`}>

        {step === 3 && (
          <div className=''>
            <h3 className='text-[#313131] mt-[2em] pb-[1em]'>Upload Profile Pic</h3>
            <div className="tb-container w-full mx-auto border-[2px] border-[black] text-[black] text-[20px] py-[40px] rounded-[8px]">
            <div className="tb-img-view w-full flex justify-center">
            <img id="tb-image" />

            </div>
  <label htmlFor="tb-file-upload" className='flexCol mx-auto'>
    <svg className='w-[2.5em]' viewBox="0 0 29 34" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <input type="file" id="tb-file-upload" accept="image/*" onChange={fileUpload} />
</div>
          </div>
        )}</div>
        <div className='flex mt-[20px] gap-[1em] justify-end'>
          {step > 1 && (
            <button type="button" onClick={handlePrev} className='notSolidBtn'>
              Prev
            </button>
          )}
          {step < 3 && (
            <button type="button" onClick={handleNext} className='solidBtn'>
              Next
            </button>
          )}
          {step === 3 && <button type="submit" className='solidBtn'>Submit</button>}
        </div>
        </>  }
      </form>
      )}
      {isSubmitted && (
        <div className={`submission-message md:w-[50vw] w-full h-full ${isSubmitted ? 'visible' : ''}`}>
          <h2 className="text-primary text-center text-[24px] sm:text-[26px] md:text-[30px] lg:text-[44px]">You made it!</h2><br/>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">We are Proud of you :)</p><br/>
          <a href="/Login" className="solidBtn">Login</a>
        </div>
      )}
    </div>
    
  );
};

export default Signup;
