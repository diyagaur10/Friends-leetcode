const profiles = [
    {
      name: "Jyoti Charan",
      photo: "https://via.placeholder.com/100",
      Leetcode: "https://leetcode.com/u/jyoticharan/"
    },
    {
      name: "Khushi Purohit",
      photo: "https://via.placeholder.com/100",
      Leetcode: "https://leetcode.com/u/khushipurohit/"
    },
    {
        name: "Diya Gaur",
        photo: "https://via.placeholder.com/100",
        Leetcode: "https://leetcode.com/u/_diyagaur/"
      },
      {
        name: "Sachin Barupal",
        photo: "https://via.placeholder.com/100",
        Leetcode: "https://leetcode.com/u/sachinbarupal/"
      },
      {
        name: "Jyoti Charan",
        photo: "https://via.placeholder.com/100",
        Leetcode: "https://leetcode.com/u/jyoticharan/"
      }
  ];
  
  const container = document.getElementById("profile-container");
  
  function renderProfiles() {
    container.innerHTML = ""; // Clear existing profiles
    profiles.forEach((profile, index) => {
      const card = document.createElement("div");
      card.className = "profile-card";
      card.innerHTML = `
        <img src="${profile.photo}" alt="${profile.name}">
        <h3>${profile.name}</h3>
        <a href="${profile.Leetcode}" target="_blank">Leetcode Profile</a>
        
      `;
      container.appendChild(card);
    });
  
    
   
  }
  
  
  
  

  // Initial rendering
  renderProfiles();
  
  // Handle form submission
  document.getElementById("profile-form").addEventListener("submit", event => {
    event.preventDefault(); // Prevent form from refreshing the page
  
    // Get input values
    const name = document.getElementById("name").value;
    const photo = document.getElementById("photo").value;
    const linkedin = document.getElementById("Leetcode").value;
  
    // Add new profile to the array
    profiles.push({ name, photo, Leetcode });
  
    // Render updated profiles
    renderProfiles();
  
    // Clear form inputs
    event.target.reset();
  });
  