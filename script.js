const tagline = document.querySelector(".tagline");
const words = ["Discovery", "Exploration", "Advancement"];
const Detail0 = document.querySelector("#Detail-0");
const Detail1 = document.querySelector("#Detail-1");
const Detail2 = document.querySelector("#Detail-2");
const Detail3 = document.querySelector("#Detail-3");
const Detail4 = document.querySelector("#Detail-4");
const details = document.querySelectorAll(".image-details");
const JournalsList = document.querySelector(".Journals-div");

words.forEach((word, index) => {
  const span = document.createElement("span");
  span.textContent = word;
  span.style.animationDelay = `${index * 0.5}s`;
  tagline.appendChild(span);
});

const journals = [
  {
    title: "Augmenting Trust by Combining Machine Learning and Blockchain",
    author: "Ashish Sharma",
    publishingDate: "20-03-2022",
    category: "Computer Science",
    previewImage: "Images/Paper-1.png",
    url: "wikipeida.com",
    type: "top-reads",
  },
  {
    title: "Augmenting Trust by Combining Machine Learning and Blockchain",
    author: "Ashish Sharma",
    publishingDate: "20-03-2023",
    category: "Computer Engineering",
    previewImage: "Images/Paper-1.png",
    url: "https://docs.google.com/document/d/18syYaxqRP6N8cCX9ZQx4RD0_l1gxnWAzHghp7mIJIic/edit",
    type: "latest",
  },
  {
    title: "Augmenting Trust by Combining Machine Learning and Blockchain",
    author: "Bharat Pahwa",
    publishingDate: "20-03-2023",
    category: "Mechanical Engineering",
    previewImage: "Images/Paper-1.png",
    url: "https://docs.google.com/document/d/18syYaxqRP6N8cCX9ZQx4RD0_l1gxnWAzHghp7mIJIic/edit",
    type: "top-reads",
  },
  {
    title: "Augmenting Trust by Combining Machine Learning and Blockchain",
    author: "Deepak Kumar",
    publishingDate: "20-03-2023",
    category: "Electrical Engineering",
    previewImage: "Images/Paper-1.png",
    url: "https://docs.google.com/document/d/18syYaxqRP6N8cCX9ZQx4RD0_l1gxnWAzHghp7mIJIic/edit",
    type: "latest",
  },
  {
    title: "Augmenting Trust by Combining Machine Learning and Blockchain",
    author: "Deepak Kumar",
    publishingDate: "20-03-2023",
    category: "Electrical Engineering",
    previewImage: "Images/Paper-1.png",
    url: "https://docs.google.com/document/d/18syYaxqRP6N8cCX9ZQx4RD0_l1gxnWAzHghp7mIJIic/edit",
    type: "latest",
  },
  {
    title: "Augmenting Trust by Combining Machine Learning and Blockchain",
    author: "Deepak Kumar",
    publishingDate: "20-03-2023",
    category: "Electrical Engineering",
    previewImage: "Images/Paper-1.png",
    url: "https://docs.google.com/document/d/18syYaxqRP6N8cCX9ZQx4RD0_l1gxnWAzHghp7mIJIic/edit",
    type: "latest",
  },
  {
    title: "Augmenting Trust by Combining Machine Learning and Blockchain",
    author: "Deepak Kumar",
    publishingDate: "20-03-2023",
    category: "Electrical Engineering",
    previewImage: "Images/Paper-1.png",
    url: "https://docs.google.com/document/d/18syYaxqRP6N8cCX9ZQx4RD0_l1gxnWAzHghp7mIJIic/edit",
    type: "latest",
  },
  {
    title: "Augmenting Trust by Combining Machine Learning and Blockchain",
    author: "Deepak Kumar",
    publishingDate: "20-03-2023",
    category: "Electrical Engineering",
    previewImage: "Images/Paper-1.png",
    url: "https://docs.google.com/document/d/18syYaxqRP6N8cCX9ZQx4RD0_l1gxnWAzHghp7mIJIic/edit",
    type: "latest",
  },
  {
    title: "Augmenting Trust by Combining Machine Learning and Blockchain",
    author: "Deepak Kumar",
    publishingDate: "20-03-2023",
    category: "Computer Engineering",
    previewImage: "Images/Paper-1.png",
    url: "https://docs.google.com/document/d/18syYaxqRP6N8cCX9ZQx4RD0_l1gxnWAzHghp7mIJIic/edit",
    type: "latest",
  },
  {
    title: "Augmenting Trust by Combining Machine Learning and Blockchain",
    author: "Deepak Kumar",
    publishingDate: "20-03-2023",
    category: "Electrical Engineering",
    previewImage: "Images/Paper-1.png",
    url: "https://docs.google.com/document/d/18syYaxqRP6N8cCX9ZQx4RD0_l1gxnWAzHghp7mIJIic/edit",
    type: "latest",
  },
  {
    title: "Augmenting Trust by Combining Machine Learning and Blockchain",
    author: "Deepak Kumar",
    publishingDate: "20-03-2023",
    category: "Computer Engineering",
    previewImage: "Images/Paper-1.png",
    url: "https://docs.google.com/document/d/18syYaxqRP6N8cCX9ZQx4RD0_l1gxnWAzHghp7mIJIic/edit",
    type: "top-reads",
  },
  {
    title: "Augmenting Trust by Combining Machine Learning and Blockchain",
    author: "Deepika",
    publishingDate: "20-03-2023",
    category: "Computer Science",
    previewImage: "Images/Paper-1.png",
    url: "https://docs.google.com/document/d/18syYaxqRP6N8cCX9ZQx4RD0_l1gxnWAzHghp7mIJIic/edit",
    type: "latest",
  },
  {
    title: "Augmenting Trust by Combining Machine Learning and Blockchain",
    author: "Deep",
    publishingDate: "20-03-2023",
    category: "Computer Science",
    previewImage: "Images/Paper-1.png",
    url: "https://docs.google.com/document/d/18syYaxqRP6N8cCX9ZQx4RD0_l1gxnWAzHghp7mIJIic/edit",
    type: "top-reads",
  },
  {
    title: "Augmenting Trust by Combining Machine Learning and Blockchain",
    author: "Kumar",
    publishingDate: "20-03-2023",
    category: "Electrical Engineering",
    previewImage: "Images/Paper-1.png",
    url: "https://docs.google.com/document/d/18syYaxqRP6N8cCX9ZQx4RD0_l1gxnWAzHghp7mIJIic/edit",
    type: "latest",
  },
  {
    title: "Augmenting Trust by Combining Machine Learning and Blockchain",
    author: "Deepak Kumar",
    publishingDate: "20-03-2023",
    category: "Electrical Engineering",
    previewImage: "Images/Paper-1.png",
    url: "https://docs.google.com/document/d/18syYaxqRP6N8cCX9ZQx4RD0_l1gxnWAzHghp7mIJIic/edit",
    type: "top-reads",
  },
  {
    title: "Augmenting Trust by Combining Machine Learning and Blockchain",
    author: "Deepak Kumar",
    publishingDate: "20-03-2023",
    category: "Electrical Engineering",
    previewImage: "Images/Paper-1.png",
    url: "https://docs.google.com/document/d/18syYaxqRP6N8cCX9ZQx4RD0_l1gxnWAzHghp7mIJIic/edit",
    type: "latest",
  },
  {
    title: "Augmenting Trust by Combining Machine Learning and Blockchain",
    author: "Deepak Kumar",
    publishingDate: "20-03-2023",
    category: "Electrical Engineering",
    previewImage: "Images/Paper-1.png",
    url: "https://docs.google.com/document/d/18syYaxqRP6N8cCX9ZQx4RD0_l1gxnWAzHghp7mIJIic/edit",
    type: "top-reads",
  },
  {
    title: "Augmenting Trust by Combining Machine Learning and Blockchain",
    author: "Deepak Kumar",
    publishingDate: "20-03-2023",
    category: "Mechanical Engineering",
    previewImage: "Images/Paper-1.png",
    url: "https://docs.google.com/document/d/18syYaxqRP6N8cCX9ZQx4RD0_l1gxnWAzHghp7mIJIic/edit",
    type: "top-reads",
  },
];

// Function to initialize the filtering functionality
function initializeFiltering() {
  // Get the category select element and radio buttons for filtering
  var categorySelect = document.getElementById("category");
  var topReadsRadio = document.getElementById("top-reads");
  var latestRadio = document.getElementById("latest");

  // Function to filter the journals based on the selected filter options
  function filterJournals() {
    const selectedCategory = categorySelect.value;
    const selectedFilter = topReadsRadio.checked ? "top-reads" : "latest";

    // Clear the existing journals in the adjacent element
    JournalsList.innerHTML = "";

    // Filter the journals based on the selected category and filter option
    const filteredJournals = journals.filter(function (journal) {
      return (
        (journal.category === selectedCategory || selectedCategory === "") &&
        (journal.type === selectedFilter ||
          (selectedFilter === "top-reads" && journal.type !== "latest"))
      );
    });

    // Loop through each filtered journal and insert the corresponding HTML code
    filteredJournals.forEach(function (journal) {
      // Construct the HTML code using the object values
      var htmlCode = `
        <div class="journal-card">
          <div class="journal-image">
            <img src="${journal.previewImage}" alt="Journal" class="Journal-Preview-Image" />
          </div>
          <div class="journal-info">
            <p class="journal-title">${journal.title}</p>
            <p class="author">Author: <span>${journal.author}</span></p>
            <p class="publishingdate">Published on: <span>${journal.publishingDate}</span></p>
            <a href="${journal.url}" class="View-Journal">View</a>
          </div>
        </div>
      `;

      // Insert the HTML code into the adjacent element
      JournalsList.insertAdjacentHTML("beforeend", htmlCode);
    });
  }

  // Add event listeners to the category select and radio buttons
  categorySelect.addEventListener("change", filterJournals);
  topReadsRadio.addEventListener("change", filterJournals);
  latestRadio.addEventListener("change", filterJournals);

  // Initial call to filter journals based on the default selected options
  filterJournals();
}

// Call the function to initialize filtering
initializeFiltering();

