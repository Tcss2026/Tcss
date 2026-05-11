// Supabase setup
const SUPABASE_URL = 'https://jevlvojgxiryzthcpbtv.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_qbeX4fD9dbu7LWDXFbASFQ_D5gDXzeb';
const supabase = Supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Test connection
async function testConnection() {
  const { data, error } = await supabase.from('Members').select('*');
  console.log('Members table data:', data);
  console.log('Error (if any):', error);
}

testConnection();
// Admin Password (for demo)
const ADMIN_PASSWORD = "078077";

// Show/hide login sections
function showSection(section){
  document.querySelectorAll('.login-section').forEach(s=>s.style.display='none');
  document.getElementById(section).style.display='block';
}

// Admin login
function loginAdmin(){
  const pass = document.getElementById('adminPass').value;
  if(pass===ADMIN_PASSWORD){ localStorage.setItem('role','admin'); location.href='dashboard.html'; }
  else alert('Wrong password');
}

// User login
async function loginUser(){ /* Fetch user from Supabase */ }

// Create Account
async function createAccount(){ /* Create account if phone exists in members */ }

// Logout
function logout(){ localStorage.clear(); location.href='reg.html'; }

// Dashboard / Members functions
async function loadDashboard(){ /* Load total savings & Chart.js */ }
async function loadMembers(){ /* Load member list, live search */ }
async function addMember(){ /* Add member with profile pic upload */ }

// Profiles
function deposit(){ /* Admin deposit logic */ }
function withdraw(){ /* Admin withdraw logic */ }
function downloadHistory(){ /* Download PDF transaction history */ }