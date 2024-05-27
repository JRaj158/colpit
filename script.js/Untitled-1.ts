// HTML Elements
const signupButton = document.getElementById('signupButton') as HTMLButtonElement;
const openSignInButton = document.getElementById('openSignIn') as HTMLButtonElement;
const openSignUpButton = document.getElementById('openSignUp') as HTMLButtonElement;
const downloadButton = document.getElementById('downloadButton') as HTMLElement;
const menuButton = document.getElementById('menuButton') as HTMLElement;
const profileButton = document.getElementById('profileButton') as HTMLElement;
const historyButton = document.getElementById('historyButton') as HTMLElement;
const settingsButton = document.getElementById('settingsButton') as HTMLElement;
const lightTheme = document.getElementById('lightTheme') as HTMLInputElement;
const darkTheme = document.getElementById('darkTheme') as HTMLInputElement;
const deviceDefault = document.getElementById('deviceDefault') as HTMLInputElement;
const signupModal = document.getElementById('signupModal') as HTMLElement;
const detailedSignupModal = document.getElementById('detailedSignupModal') as HTMLElement;
const closeButtons = document.querySelectorAll('.close') as NodeListOf<HTMLSpanElement>;

// Event Listeners
signupButton.addEventListener('click', () => {
  // Show the signupModal
  signupModal.style.display = 'block';
});

openSignInButton.addEventListener('click', () => {
  // Handle Sign In functionality (possibly open another modal)
  console.log('Sign In clicked!');
});

openSignUpButton.addEventListener('click', () => {
  // Show the detailedSignupModal
  detailedSignupModal.style.display = 'block';
  signupModal.style.display = 'none';
});

downloadButton.addEventListener('click', () => {
  alert('Download button clicked!');
});

menuButton.addEventListener('click', () => {
  // Toggle the menu-open class on the body to show/hide the sidebar
  document.body.classList.toggle('menu-open');
});

profileButton.addEventListener('click', () => {
  alert('Profile button clicked!');
});

historyButton.addEventListener('click', () => {
  alert('Order History button clicked!');
});

settingsButton.addEventListener('click', () => {
  alert('Settings button clicked!');
});

// Theme selection (you can adjust this part based on your theme handling logic)
lightTheme.addEventListener('change', () => {
  // Handle light theme selection
  // You can update the theme here
});

darkTheme.addEventListener('change', () => {
  // Handle dark theme selection
  // You can update the theme here
});

deviceDefault.addEventListener('change', () => {
  // Handle device default theme selection
  // You can update the theme here
});

// Close modals when clicking outside the content
window.addEventListener('click', (event) => {
  if (event.target === signupModal) {
    signupModal.style.display = 'none';
  } else if (event.target === detailedSignupModal) {
    detailedSignupModal.style.display = 'none';
  }
});

// Close modals when clicking on the close button
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.closest('.modal') === signupModal) {
      signupModal.style.display = 'none';
    } else if (button.closest('.modal') === detailedSignupModal) {
      detailedSignupModal.style.display = 'none';
    }
  });
});

// Close the sidebar menu when clicking outside of it
window.addEventListener('click', (event) => {
  const menu = document.getElementById('menu') as HTMLElement;
  if (!menu.contains(event.target as Node) && !menuButton.contains(event.target as Node)) {
    document.body.classList.remove('menu-open');
  }
});
