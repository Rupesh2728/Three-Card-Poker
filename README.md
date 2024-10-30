﻿﻿﻿﻿<h1 align="center">Three Card Poker</h1>
<h3 align="center">A Blockchain Smart Contract based game </h3>
<h3 align="center">The goal of this project is to create a game tailored for poker players to play using their metamask account</h3>

<h2 align="left">Tech Stack and Tools :</h2>
<p align="left">
<a href="https://soliditylang.org/" target="_blank" rel="noreferrer"> <img src="https://developers.moralis.com/wp-content/uploads/2021/06/Blog-Solidity-Logo.png" alt="Solidity" width="150" height="100"/> </a>
<a href="https://docs.ethers.org/v5/" target="_blank" rel="noreferrer"> <img src="https://miro.medium.com/v2/resize:fit:960/1*z7_kWKf-M-b_qSYTM_9b-g.png" alt="Ethers.js" width="150" height="100"/> </a>
<a href="https://hardhat.org/" target="_blank" rel="noreferrer"> <img src="https://hardhat.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhardhat-logo.5c5f687b.svg&w=256&q=75" alt="HardHat" width="150" height="100"/> </a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="80" height="80"/> </a>
<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="80" height="80"/> </a>
</p>

<h2 align="left">Work Flow</h2>
<img src="./IR_WorkFlow.jpg" alt="Work Flow" width="800" height="400"/>

<h3 align="left">Data Collection</h3>

- **Links Collection from tech-crunch** : All the articles released on a particular date are arranged under the URL which looks link **https://www.techcrunch.com/dd-mm-yyyy/**.
We sent request to this link by iterating the date from June 6th 2005 to November 25th 2023.

- The dataset comprises around 1,09,000 documents.
  
- **Source Website** : https://www.techcrunch.com

- **Fetching Data from links** : After collecting all the links, iteratively requests were sent to every link and parsed the response using beautiful-Soup library.

<h3 align="left">Data Pre-Processing</h3>

- **Text Cleaning** : Clean the text data to remove unnecessary characters and formatting.

-  **Text Cleaning** : Break the text into individual tokens (words or phrases).

-  **Lemmatization** : Convert words to their base or root form.

-  **Stop Word Removal** : Eliminate common words that do not contribute significant meaning (e.g., "and," "the").

<h3 align="left">Indexing</h3>

- An efficient indexing system to facilitate quick retrieval of documents.

<h3 align="left">Ranking</h3>

- Utilize the Vector Space Model to represent documents and queries as vectors.

- Rank documents based on their relevance to the user’s query.

<h3 align="left">Search Engine Implementation</h3>

- **User Input:** : Capture user queries for searching using frontend application.

-  **Query Processing** : Process the input query to prepare it for matching against indexed documents.

-  **Cosine Similarity** : Calculate cosine similarity between document vectors and query vectors to determine relevance.

<h3 align="left">User Interface</h3>

- Developed a user-friendly interface for seamless interaction with the search engine.

<h3 align="left">Feedback Mechanism</h3>

- Implemented a system to collect user feedback on retrieved results.

<h3 align="left">Evaluation</h3>

- Analyze performance using Precision-Recall (P-R) curve after marking retrieved documents as relevant or non-relevant.

All the files for above steps are available in the **LogicFiles** folder inside **Search_Engine_Server**


<h2 align="left">Installation</h2>
To get started with this project, clone the repository and install the necessary libraries in your system

<h3>Primary Steps to be followed :</h3>

- You may find the dataset and JSON Files in the below drive link

- https://drive.google.com/drive/folders/1w-MOcWZxe9dN9Ts2SIGq1txZMIx8VJhf?usp=sharing

- Download All the 7 JSON files present in **JsonFiles** folder from above drive link.

- Follow below instructions for complete setup of the project

```bash
# Clone the repository
git clone https://github.com/Rupesh2728/Techno_Tales.git

# Navigate to the project directory
cd Techno_Tales-main
```

<h3 align="left">Server Setup :</h3>

```bash
    # Navigate to the Search_Engine_Server folder 
    cd Search_Engine_Server

   # Create a empty folder named "IRDataset"
   mkdir IRDataset

   # Navigate into IRDataset folder
   mkdir JsonFiles
  ```

- Place those 7 files, inside the folder named **JsonFiles** in **IRDataset** folder that is present in **Search_Engine_Server** folder.

- Continue to follow below instructions for complete the remaining setup of the project.
  
```bash
# Navigate to the Search_Engine_Server folder 
cd Search_Engine_Server

#  Check your pip version
python -m pip --version

# Make sure to have pip or pip3 installed
python.exe -m pip install --upgrade pip  (or) python.exe -m pip install --upgrade pip --user

# Install the required Python packages using the command
pip install -r requirements.txt --user

# Run the main server file
 python Server.py

# Allow the server, (B/w 90-100 Seconds) to load all the files
```

<h3 align="left">Client Setup :</h3>

```bash
# Navigate to the Search_Engine_Server folder 
cd Frontend

# Install the required Node.js modules
npm install

# Start the React application
npm start

# Make sure the server is ready to accept the requests and wait until the below message is poped-up
The Files are Loaded in to the Server.....

# Now, give the query input in the frontend application
```


<h2 align="left">Images</h2>
<a href="" target="_blank" rel="noreferrer"> 
<img src="./Search_Engine_Server/Website images/img1.png" alt="react" width="800" height="400"/> 
</a>

<a href="" target="_blank" rel="noreferrer"> 
<img src="./Search_Engine_Server/Website images/img2.png" alt="react" width="800" height="400"/> 
</a>

<a href="" target="_blank" rel="noreferrer"> 
<img src="./Search_Engine_Server/Website images/img3.png" alt="react" width="800" height="400"/> 
</a>

<a href="" target="_blank" rel="noreferrer"> 
<img src="./Search_Engine_Server/Website images/img4.png" alt="react" width="800" height="400"/> 
</a>

<a href="" target="_blank" rel="noreferrer"> 
<img src="./Search_Engine_Server/Website images/img5.png" alt="react" width="800" height="400"/> 
</a>

<h2 align="left">Contact Me</h2>

- 📫 You can to reach me by mailing to **rupesh.p21@iiits.in** or **rupeshprofessional2728@gmail.com** or **varun.p21@iiits.in**

- 👨‍💻 Project is available at [https://github.com/Rupesh2728/Techno_Tales.git]
  








