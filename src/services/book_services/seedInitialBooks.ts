import bookModel from "../../models/book";


interface bookParams {
    id: number,
    bookName: string,
    author: string,
    description: string,
    imageUrl: string,
    category: string,
    owner: number,
    addingDate: number,
}


export const getAllBooks = async () => {
  return await bookModel.find();
};



export const seedInitialBooks = async () => {
  const books:bookParams[] = [
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "The C Programming Language",
    author: "Brian W. Kernighan & Dennis M. Ritchie",
    description:
      "The C Programming Language (1978) is the seminal book on C by its creators, introducing the language’s syntax, semantics, and idioms.", // Source: Wikipedia :contentReference[oaicite:0]{index=0}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780131103627-M.jpg", // Open Library Covers API :contentReference[oaicite:1]{index=1}
    category: "Programming",
    owner: 1,
    addingDate: Date.now() - 1747256400000,
  },
  // الكتب الجديدة المضافة
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    description:
      "Clean Code (2008) teaches principles and best practices for writing readable, maintainable, and refactorable code.", // Source: Wikipedia :contentReference[oaicite:2]{index=2}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780132350884-M.jpg", // :contentReference[oaicite:3]{index=3}
    category: "Programming",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    description:
      "The Pragmatic Programmer (1999) covers a broad range of topics in software engineering, from career development to architectural techniques.", // Source: Wikipedia :contentReference[oaicite:4]{index=4}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780201616224-M.jpg", // :contentReference[oaicite:5]{index=5}
    category: "Programming",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "Design Patterns: Elements of Reusable Object‑Oriented Software",
    author: "Erich Gamma, Richard Helm, Ralph Johnson & John Vlissides",
    description:
      "Design Patterns (1994) catalogs 23 classic solutions to common object‑oriented design problems.", // Source: Wikipedia :contentReference[oaicite:6]{index=6}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780201633610-M.jpg", // :contentReference[oaicite:7]{index=7}
    category: "Programming",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "Introduction to Algorithms",
    author: "Thomas H. Cormen et al.",
    description:
      "Introduction to Algorithms (1990) is a comprehensive textbook covering a broad range of algorithms in depth.", // Source: Wikipedia :contentReference[oaicite:8]{index=8}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780262033848-M.jpg", // :contentReference[oaicite:9]{index=9}
    category: "Programming",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "Code Complete",
    author: "Steve McConnell",
    description:
      "Code Complete (1993) is a practical handbook of software construction, covering coding techniques and best practices.", // Source: Wikipedia :contentReference[oaicite:10]{index=10}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780735619678-M.jpg", // :contentReference[oaicite:11]{index=11}
    category: "Programming",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "Refactoring: Improving the Design of Existing Code",
    author: "Martin Fowler",
    description:
      "Refactoring (1999) presents techniques for restructuring existing code without changing its external behavior.", // Source: Wikipedia :contentReference[oaicite:12]{index=12}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780201485677-M.jpg", // :contentReference[oaicite:13]{index=13}
    category: "Programming",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    description:
      "JavaScript: The Good Parts (2008) distills the core features of JavaScript that make it reliable and maintainable.", // Source: Wikipedia :contentReference[oaicite:14]{index=14}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780596517748-M.jpg", // :contentReference[oaicite:15]{index=15}
    category: "Programming",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "You Don't Know JS: Scope & Closures",
    author: "Kyle Simpson",
    description:
      "You Don't Know JS (2014) dives deep into JavaScript’s scope and closure mechanisms.", // Source: Wikipedia :contentReference[oaicite:16]{index=16}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9781449335588-M.jpg", // :contentReference[oaicite:17]{index=17}
    category: "Programming",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    description:
      "Eloquent JavaScript (2011) is a modern introduction to programming using JavaScript.", // Source: Wikipedia :contentReference[oaicite:18]{index=18}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9781593279509-M.jpg", // :contentReference[oaicite:19]{index=19}
    category: "Programming",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },

  // Stories (10)
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "Pride and Prejudice (1813) follows Elizabeth Bennet as she learns about the repercussions of hasty judgments.", // Source: Wikipedia :contentReference[oaicite:20]{index=20}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780141439518-M.jpg", // :contentReference[oaicite:21]{index=21}
    category: "Stories",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "Moby-Dick; or, The Whale",
    author: "Herman Melville",
    description:
      "Moby-Dick (1851) narrates Captain Ahab’s obsessive quest for revenge against the white whale.", // Source: Wikipedia :contentReference[oaicite:22]{index=22}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780142437247-M.jpg", // :contentReference[oaicite:23]{index=23}
    category: "Stories",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "Brave New World",
    author: "Aldous Huxley",
    description:
      "Brave New World (1932) depicts a technologically advanced future shaped by genetic engineering and social conditioning.", // Source: Wikipedia :contentReference[oaicite:24]{index=24}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780060850524-M.jpg", // :contentReference[oaicite:25]{index=25}
    category: "Stories",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "The Catcher in the Rye",
    author: "J. D. Salinger",
    description:
      "The Catcher in the Rye (1951) follows Holden Caulfield’s experiences in New York City.", // Source: Wikipedia :contentReference[oaicite:26]{index=26}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780316769488-M.jpg", // :contentReference[oaicite:27]{index=27}
    category: "Stories",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "The Hobbit",
    author: "J. R. R. Tolkien",
    description:
      "The Hobbit (1937) follows Bilbo Baggins’s quest to help dwarves reclaim their mountain home from Smaug.", // Source: Wikipedia :contentReference[oaicite:28]{index=28}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780547928227-M.jpg", // :contentReference[oaicite:29]{index=29}
    category: "Stories",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "To Kill a Mockingbird (1960) deals with racial injustice in the Deep South through Scout Finch’s eyes.", // Source: Wikipedia :contentReference[oaicite:30]{index=30}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780060935467-M.jpg", // :contentReference[oaicite:31]{index=31}
    category: "Stories",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "1984",
    author: "George Orwell",
    description:
      "Nineteen Eighty-Four (1949) is a dystopian novel about a totalitarian regime’s mass surveillance.", // Source: Wikipedia :contentReference[oaicite:32]{index=32}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780451524935-M.jpg", // :contentReference[oaicite:33]{index=33}
    category: "Stories",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "The Great Gatsby (1925) depicts Jay Gatsby’s obsession with Daisy Buchanan in the Jazz Age.", // Source: Wikipedia :contentReference[oaicite:34]{index=34}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780743273565-M.jpg", // :contentReference[oaicite:35]{index=35}
    category: "Stories",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "The Alchemist",
    author: "Paulo Coelho",
    description:
      "The Alchemist (1988) follows shepherd Santiago on a journey to the Egyptian pyramids after dreaming of treasure.", // Source: Wikipedia :contentReference[oaicite:36]{index=36}
    imageUrl: "https://covers.openlibrary.org/b/isbn/0062502174-M.jpg", // :contentReference[oaicite:37]{index=37}
    category: "Stories",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "The Lion, the Witch and the Wardrobe",
    author: "C. S. Lewis",
    description:
      "The Lion, the Witch and the Wardrobe (1950) follows four siblings who discover the magical land of Narnia.", // Source: Wikipedia :contentReference[oaicite:38]{index=38}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780064471046-M.jpg", // :contentReference[oaicite:39]{index=39}
    category: "Stories",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },

  // Medical (10)
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "The Emperor of All Maladies",
    author: "Siddhartha Mukherjee",
    description:
      "The Emperor of All Maladies (2010) is a biography of cancer and a medical history of its treatment.", // Source: Wikipedia :contentReference[oaicite:42]{index=42}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9781439170915-M.jpg", // :contentReference[oaicite:43]{index=43}
    category: "Medical",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "The Man Who Mistook His Wife for a Hat",
    author: "Oliver Sacks",
    description:
      "The Man Who Mistook His Wife for a Hat (1985) is a collection of neurological case histories.", // Source: Wikipedia :contentReference[oaicite:44]{index=44}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780684853949-M.jpg", // :contentReference[oaicite:45]{index=45}
    category: "Medical",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "Being Mortal",
    author: "Atul Gawande",
    description:
      "Being Mortal (2014) examines end-of-life care and the medical profession’s limitations.", // Source: Wikipedia :contentReference[oaicite:48]{index=48}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780805095159-M.jpg", // :contentReference[oaicite:49]{index=49}
    category: "Medical",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "Clinical Microbiology Made Ridiculously Simple",
    author: "Mark T. Gladwin & William Trattler & C. Scott Mahan",
    description:
      "Clinical Microbiology Made Ridiculously Simple (2015) provides a concise overview of key microbiology concepts.", // Source: Open Library :contentReference[oaicite:0]{index=0}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9781935660330-L.jpg", // Open Library Covers API :contentReference[oaicite:1]{index=1}
    category: "Medical",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "How Learning Works",
    author: "Susan A. Ambrose et al.",
    description:
      "How Learning Works (2010) presents seven principles for effective learning.", // Source: Amazon :contentReference[oaicite:2]{index=2}
    imageUrl: "https://m.media-amazon.com/images/I/71hQ9miNakL._SL1500_.jpg", // Open Library Covers API :contentReference[oaicite:3]{index=3}
    category: "Educational",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "The Skillful Teacher",
    author: "Stephen D. Brookfield",
    description:
      "The Skillful Teacher (2015) explores reflective teaching practices.", // Source: Wiley :contentReference[oaicite:4]{index=4}
    imageUrl:
      "https://api.rbteach.com/uploads/TST_7_Front_cover_cropped_41f5e725e4.jpg", // Open Library Covers API :contentReference[oaicite:5]{index=5}
    category: "Educational",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "Teaching to Transgress",
    author: "bell hooks",
    description:
      "Teaching to Transgress (1994) links education to liberation and social justice.", // Source: Amazon :contentReference[oaicite:6]{index=6}
    imageUrl: "https://covers.openlibrary.org/b/isbn/0415908086-L.jpg", // Open Library Covers API :contentReference[oaicite:7]{index=7}
    category: "Educational",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "Gray's Anatomy",
    author: "Henry Gray",
    description: "Gray’s Anatomy (1858) is the classic human anatomy textbook.", // Source: Wikipedia :contentReference[oaicite:8]{index=8}
    imageUrl:
      "https://covers.storytel.com/jpg-640/9781848584938.91c78bc1-00ce-416e-b46e-675c2d8879d7?optimize=high&quality=70&width=600", // Wikimedia Commons :contentReference[oaicite:9]{index=9}
    category: "Medical",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "How Doctors Think",
    author: "Jerome Groopman",
    description:
      "How Doctors Think (2007) explores the cognitive processes that shape medical decision‑making.", // Source: Amazon :contentReference[oaicite:10]{index=10}
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSqN1jZ9GTh0DUoTx1blABi4whZHInNCxmv4g1dQpl-k6fd5elN", // Open Library Covers API :contentReference[oaicite:11]{index=11}
    category: "Medical",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "The Body: A Guide for Occupants",
    author: "Bill Bryson",
    description:
      "The Body (2019) offers a tour of the human body’s functions and curiosities.", // Source: Amazon :contentReference[oaicite:12]{index=12}
    imageUrl: "https://covers.openlibrary.org/b/isbn/0385539304-L.jpg", // Open Library Covers API :contentReference[oaicite:13]{index=13}
    category: "Medical",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "Pathophysiology Made Incredibly Easy",
    author: "Lippincott Williams & Wilkins",
    description:
      "Pathophysiology Made Incredibly Easy (2012) simplifies complex disease mechanisms.", // Source: Amazon :contentReference[oaicite:14]{index=14}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9781451146233-L.jpg", // OpenS_Library Covers API :contentReference[oaicite:15]{index=15}
    category: "Medical",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "Robbins and Cotran Pathologic Basis of Disease",
    author: "Vinay Kumar et al.",
    description:
      "Robbins and Cotran (2015) is an authoritative textbook on pathology.", // Source: Elsevier :contentReference[oaicite:16]{index=16}
    imageUrl: "http://gomerpedia.org/images/c/cd/Robbins_and_Cotran.jpg", // Open Library Covers API :contentReference[oaicite:17]{index=17}
    category: "Medical",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "Harrison's Principles of Internal Medicine",
    author: "J. Larry Jameson et al.",
    description:
      "Harrison’s (2018) is a comprehensive guide to internal medicine.", // Source: Wikipedia :contentReference[oaicite:56]{index=56}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780071802154-M.jpg", // :contentReference[oaicite:57]{index=57}
    category: "Medical",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },

  // Educational (10)
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "Pedagogy of the Oppressed",
    author: "Paulo Freire",
    description:
      "Pedagogy of the Oppressed (1968) discusses education as the practice of freedom.", // Source: Wikipedia :contentReference[oaicite:60]{index=60}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780826412768-M.jpg", // :contentReference[oaicite:61]{index=61}
    category: "Educational",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "Make It Stick",
    author: "Peter C. Brown, Henry L. Roediger III & Mark A. McDaniel",
    description:
      "Make It Stick (2014) examines cognitive science research to improve learning.", // Source: Wikipedia :contentReference[oaicite:68]{index=68}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780674729018-M.jpg", // :contentReference[oaicite:69]{index=69}
    category: "Educational",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "Visible Learning",
    author: "John Hattie",
    description:
      "Visible Learning (2008) synthesizes over 800 meta-analyses on student achievement.", // Source: Wikipedia :contentReference[oaicite:74]{index=74}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780415476188-M.jpg", // :contentReference[oaicite:75]{index=75}
    category: "Educational",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },

  // Scientific (10)
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "A Brief History of Time",
    author: "Stephen Hawking",
    description:
      "A Brief History of Time (1988) explains fundamental concepts of cosmology for a general audience.", // Source: Wikipedia :contentReference[oaicite:80]{index=80}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780553380163-M.jpg", // :contentReference[oaicite:81]{index=81}
    category: "Scientific",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "Cosmos",
    author: "Carl Sagan",
    description:
      "Cosmos (1980) explores the universe’s history, science, and humanity’s place in it.", // Source: Wikipedia :contentReference[oaicite:82]{index=82}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780345539434-M.jpg", // :contentReference[oaicite:83]{index=83}
    category: "Scientific",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "The Selfish Gene",
    author: "Richard Dawkins",
    description:
      "The Selfish Gene (1976) popularized the gene-centered view of evolution.", // Source: Wikipedia :contentReference[oaicite:84]{index=84}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780192860927-M.jpg", // :contentReference[oaicite:85]{index=85}
    category: "Scientific",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "The Gene: An Intimate History",
    author: "Siddhartha Mukherjee",
    description:
      "The Gene (2016) traces the history and science of genetics.", // Source: Wikipedia :contentReference[oaicite:86]{index=86}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9781476733524-M.jpg", // :contentReference[oaicite:87]{index=87}
    category: "Scientific",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "The Origin of Species",
    author: "Charles Darwin",
    description:
      "The Origin of Species (1859) introduced the theory of evolution by natural selection.", // Source: Wikipedia :contentReference[oaicite:88]{index=88}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780140439120-M.jpg", // :contentReference[oaicite:89]{index=89}
    category: "Scientific",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "Silent Spring",
    author: "Rachel Carson",
    description:
      "Silent Spring (1962) documented the environmental impact of pesticides.", // Source: Wikipedia :contentReference[oaicite:90]{index=90}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780618249060-M.jpg", // :contentReference[oaicite:91]{index=91}
    category: "Scientific",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "The Elegant Universe",
    author: "Brian Greene",
    description:
      "The Elegant Universe (1999) introduces string theory and modern physics.", // Source: Wikipedia :contentReference[oaicite:94]{index=94}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780393338102-M.jpg", // :contentReference[oaicite:95]{index=95}
    category: "Scientific",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "The Fabric of the Cosmos",
    author: "Brian Greene",
    description:
      "The Fabric of the Cosmos (2004) explores space, time, and the nature of reality.", // Source: Wikipedia :contentReference[oaicite:96]{index=96}
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780375727207-M.jpg", // :contentReference[oaicite:97]{index=97}
    category: "Scientific",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
  {
    id: Math.floor(Math.random() * 100000000),
    bookName: "The Hidden Reality",
    author: "Brian Greene",
    description: "The Hidden Reality (2011) examines multiverse theories.", // Source: Wikipedia :contentReference[oaicite:98]{index=98}
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/04/TheHiddenReality.jpg", // :contentReference[oaicite:99]{index=99}
    category: "Scientific",
    owner: 1, // تمت الإضافة
    addingDate: Date.now() - 1747256400000, // تمت الإضافة
  },
];


  const allBooks = await getAllBooks()

  if (allBooks.length === 0)
    return bookModel.insertMany(books)


};
