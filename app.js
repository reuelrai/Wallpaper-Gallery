const supabaseUrl = 'https://rsezqhsuilalbdespgod.supabase.co'; // Replace with your Supabase project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzZXpxaHN1aWxhbGJkZXNwZ29kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzMzkyMzEsImV4cCI6MjA1MTkxNTIzMX0.2A0lFSRQJ4E2xgtOLYA0LiB9ZfT0SCkbVVGyc5AAT5Y'; // Replace with your Supabase anon key

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

const name = ["Aayush Giri", "Aayusha Shresthacharya Baniya", "Asmita Silwal", "Avishek Sigel", "Bhumi Pradhan", "Bipin Dawadi", "Jenisha Shrestha", "Mandip Shrestha", "Muskan Rajbanshi", "Nikita Chaudhary", "Rakshya Shrestha", "Rijan Rijal", "Ritesh Chaudhary", "Reuel Rai", "Sakshyam Maharjan", "Samyog Sapkota", "Sandeep Lamichhane", "Samyog Sapkota", "Sandeep Lamichhane", "Shristi Budha Magar", "Srestaa Shrestha", "Sudip Bhandari", "Umang Magar", "Aakriti Ghimire", "Aastha Bhantana", "Biraj Baharjan", "Chadani Poddar", "Harish Chaisir", "Manjil Aryal", "Norzin Yonjan", "Pramit Adhikari", "Reeba Shrestha", "Reena Khadka", "Robana Kumari Shrestha", "Rubika Dongol", "Saksham Jonchhe", "Sakshi Upadhyay", "Samipya Acharya", "Shreeshma Tamrakar", "Unish Maharjan"];

// Populate the dropdown dynamically
const voteSelec = document.getElementById('name');
name.forEach(name => {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    voteSelec.appendChild(option);
});
// Predefined list of names
const names = ["Aayush Giri", "Avishek Sigel", "Bipin Dawadi", "Mandip Shrestha", "Muskan Rajbanshi", "Nikita Chaudhary", "Reuel Rai", "Samyog Sapkota", "Shristi Budha Magar", "Sudip Bhandari", "Harish Chaisir", "Manjil Aryal", "Robana Kumari Shrestha", "Samipya Acharya", "Sandeep Lamichhane", "Umang Magar"];
// Populate the dropdown dynamically
const voteSelect = document.getElementById('vote');
names.forEach(name => {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    voteSelect.appendChild(option);
});




document.getElementById('voteForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const vote = document.getElementById('vote').value;

    try {
        const { data, error } = await supabaseClient
            .from('classvotes') // Replace 'classvotes' with your table name
            .insert([{ name: name, vote: vote }]);

        if (error) {
            console.error('Error:', error);
            alert('Failed to submit vote.');
        } else {
            console.log('Vote submitted:', data);
            alert('Vote submitted successfully!');
        }
    } catch (err) {
        console.error('Unexpected Error:', err);
    }
});
