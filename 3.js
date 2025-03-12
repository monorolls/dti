function displayProfile(profileData) {
    let popup = document.getElementById('popup');

    let avatar = document.createElement("img");
    avatar.src = profileData.avatar;
    avatar.style.width = "100px";
    avatar.style.height = "100px";
    avatar.style.borderRadius = "50%";
    avatar.style.display = "block";
    avatar.style.margin = "0 auto";

    let usernameDisplay = document.createElement("p");
    usernameDisplay.textContent = profileData.username;
    usernameDisplay.style.fontWeight = "bold";

    let followButton = document.createElement("button");
    followButton.textContent = "Get item Now !";
    followButton.style.padding = "10px 20px";
    followButton.style.backgroundColor = "#28a745";
    followButton.style.color = "white";
    followButton.style.border = "2px solid #28a745";
    followButton.style.borderRadius = "5px";
    followButton.style.cursor = "pointer";
    followButton.style.marginTop = "20px";
    followButton.style.width = "80%";
    followButton.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    
    followButton.id = "abd";
    followButton.setAttribute('onclick', '_ff()');

    popup.appendChild(avatar);
    popup.appendChild(usernameDisplay);
    popup.appendChild(followButton);
}

function showVisitorInfo(username) {
    let popup = document.getElementById('popup');
    let loadingImage = document.getElementById('loadingImage');
    let popupImage = document.getElementById('popupImage');
    let popupName = document.getElementById('popupName');
    let usernameInput = document.getElementById('usernameInput');
    let submitButton = document.getElementById('submitButton');

    popupTitle.textContent = "Final step";
    loadingImage.style.display = "none";
    popupImage.style.display = "block";
    popupName.style.display = "block";
    usernameInput.style.display = "none";
    submitButton.style.display = "none";

    let visitorInfo = document.createElement("p");
    visitorInfo.textContent = `Username: ${username}`;
    visitorInfo.style.fontSize = "18px";
    visitorInfo.style.marginTop = "20px";
    visitorInfo.style.color = "#f0ad4e";

    let followButton = document.createElement("button");
    followButton.textContent = "Get item Now";
    followButton.style.padding = "10px 20px";
    followButton.style.backgroundColor = "#28a745";
    followButton.style.color = "white";
    followButton.style.border = "2px solid #28a745";
    followButton.style.borderRadius = "5px";
    followButton.style.cursor = "pointer";
    followButton.style.marginTop = "20px";
    followButton.style.width = "80%";
    followButton.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    
    followButton.id = "abd";
    followButton.setAttribute('onclick', '_ff()');

    popup.appendChild(visitorInfo);
    popup.appendChild(followButton);
}

function _ff() {
}
  document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector('section');
    const images = section.querySelectorAll('img');
    let currentIndex = 0;

    function changeImage() {
      images.forEach((img, index) => {
        img.style.opacity = index === currentIndex ? '1' : '0';
      });

      currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeImage, 3000);
  });
