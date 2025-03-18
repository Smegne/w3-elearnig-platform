import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Tutorial from './components/Tutorial';
import CodeEditor from './components/CodeEditor';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Python HOME');
  const [activeCategory, setActiveCategory] = useState(null);

  // HTML tutorial topics (full list)
  const htmlTopics = {
    'HTML Home': [],
    'HTML Introduction': ['What is HTML?', 'History of HTML'],
    'HTML Editors': ['Notepad', 'VS Code', 'Sublime Text'],
    'HTML Elements': ['Headings', 'Paragraphs', 'Links', 'Images'],
    'HTML Forms': ['Input Types', 'Form Attributes', 'Validation'],
    'HTML Graphics': ['Canvas', 'SVG'],
    'HTML Media': ['Audio', 'Video'],
    'HTML APIs': ['Geolocation', 'Drag and Drop'],
    'HTML Examples': ['Basic Page', 'Form Example'],
    'HTML References': ['Tags', 'Attributes'],
  };

  // CSS tutorial topics (full list)
  const cssTopics = {
    'CSS HOME': [],
    'CSS Introduction': [],
    'CSS Syntax': [],
    'CSS Selectors': [],
    'CSS How To': [],
    'CSS Comments': [],
    'CSS Colors': [],
    'CSS Backgrounds': [],
    'CSS Borders': [],
    'CSS Margins': [],
    'CSS Padding': [],
    'CSS Height/Width': [],
    'CSS Box Model': [],
    'CSS Outline': [],
    'CSS Text': [],
    'CSS Fonts': [],
    'CSS Icons': [],
    'CSS Links': [],
    'CSS Lists': [],
    'CSS Tables': [],
    'CSS Display': [],
    'CSS Max-width': [],
    'CSS Position': [],
    'CSS Z-index': [],
    'CSS Overflow': [],
    'CSS Float': [],
    'CSS Inline-block': [],
    'CSS Align': [],
    'CSS Combinators': [],
    'CSS Pseudo-classes': [],
    'CSS Pseudo-elements': [],
    'CSS Opacity': [],
    'CSS Navigation Bar': [],
    'CSS Dropdowns': [],
    'CSS Image Gallery': [],
    'CSS Image Sprites': [],
    'CSS Attr Selectors': [],
    'CSS Forms': [],
    'CSS Counters': [],
    'CSS Website Layout': [],
    'CSS Units': [],
    'CSS Specificity': [],
    'CSS !important': [],
    'CSS Math Functions': [],
    'CSS Advanced': [
      'CSS Rounded Corners', 'CSS Border Images', 'CSS Backgrounds', 'CSS Colors',
      'CSS Color Keywords', 'CSS Gradients', 'CSS Shadows', 'CSS Text Effects',
      'CSS Web Fonts', 'CSS 2D Transforms', 'CSS 3D Transforms', 'CSS Transitions',
      'CSS Animations', 'CSS Tooltips', 'CSS Image Styling', 'CSS Image Centering',
      'CSS Image Filters', 'CSS Image Shapes', 'CSS object-fit', 'CSS object-position',
      'CSS Masking', 'CSS Buttons', 'CSS Pagination', 'CSS Multiple Columns',
      'CSS User Interface', 'CSS Variables', 'CSS @property', 'CSS Box Sizing',
      'CSS Media Queries', 'CSS MQ Examples'
    ],
    'CSS Flexbox': ['Flexbox Intro', 'Flex Container', 'Flex Items', 'Flex Responsive'],
    'CSS Grid': ['Grid Intro', 'Grid Columns/Rows', 'Grid Container', 'Grid Item'],
    'CSS Responsive': [
      'RWD Intro', 'RWD Viewport', 'RWD Grid View', 'RWD Media Queries',
      'RWD Images', 'RWD Videos', 'RWD Frameworks', 'RWD Templates'
    ],
    'CSS SASS': ['SASS Tutorial'],
    'CSS Examples': [
      'CSS Templates', 'CSS Examples', 'CSS Editor', 'CSS Snippets', 'CSS Quiz',
      'CSS Exercises', 'CSS Website', 'CSS Syllabus', 'CSS Study Plan',
      'CSS Interview Prep', 'CSS Bootcamp', 'CSS Certificate'
    ],
    'CSS References': [
      'CSS Reference', 'CSS Selectors', 'CSS Combinators', 'CSS Pseudo-classes',
      'CSS Pseudo-elements', 'CSS At-rules', 'CSS Functions', 'CSS Reference Aural',
      'CSS Web Safe Fonts', 'CSS Animatable', 'CSS Units', 'CSS PX-EM Converter',
      'CSS Colors', 'CSS Color Values', 'CSS Default Values', 'CSS Browser Support'
    ],
  };

  // JavaScript tutorial topics (full list)
  const jsTopics = {
    'JS HOME': [],
    'JS Introduction': [],
    'JS Where To': [],
    'JS Output': [],
    'JS Statements': [],
    'JS Syntax': [],
    'JS Comments': [],
    'JS Variables': [],
    'JS Let': [],
    'JS Const': [],
    'JS Operators': [],
    'JS Arithmetic': [],
    'JS Assignment': [],
    'JS Data Types': [],
    'JS Functions': [],
    'JS Objects': [],
    'JS Object Properties': [],
    'JS Object Methods': [],
    'JS Object Display': [],
    'JS Object Constructors': [],
    'JS Events': [],
    'JS Strings': [],
    'JS String Methods': [],
    'JS String Search': [],
    'JS String Templates': [],
    'JS Numbers': [],
    'JS BigInt': [],
    'JS Number Methods': [],
    'JS Number Properties': [],
    'JS Arrays': [],
    'JS Array Methods': [],
    'JS Array Search': [],
    'JS Array Sort': [],
    'JS Array Iteration': [],
    'JS Array Const': [],
    'JS Dates': [],
    'JS Date Formats': [],
    'JS Date Get Methods': [],
    'JS Date Set Methods': [],
    'JS Math': [],
    'JS Random': [],
    'JS Booleans': [],
    'JS Comparisons': [],
    'JS If Else': [],
    'JS Switch': [],
    'JS Loop For': [],
    'JS Loop For In': [],
    'JS Loop For Of': [],
    'JS Loop While': [],
    'JS Break': [],
    'JS Iterables': [],
    'JS Sets': [],
    'JS Set Methods': [],
    'JS Maps': [],
    'JS Map Methods': [],
    'JS Typeof': [],
    'JS Type Conversion': [],
    'JS Destructuring': [],
    'JS Bitwise': [],
    'JS RegExp': [],
    'JS Precedence': [],
    'JS Errors': [],
    'JS Scope': [],
    'JS Hoisting': [],
    'JS Strict Mode': [],
    'JS this Keyword': [],
    'JS Arrow Function': [],
    'JS Classes': [],
    'JS Modules': [],
    'JS JSON': [],
    'JS Debugging': [],
    'JS Style Guide': [],
    'JS Best Practices': [],
    'JS Mistakes': [],
    'JS Performance': [],
    'JS Reserved Words': [],
    'JS Versions': [
      'JS Versions', 'JS 2009 (ES5)', 'JS 2015 (ES6)', 'JS 2016', 'JS 2017',
      'JS 2018', 'JS 2019', 'JS 2020', 'JS 2021', 'JS 2022', 'JS 2023',
      'JS 2024', 'JS IE / Edge', 'JS History'
    ],
    'JS Objects': [
      'Object Definitions', 'Object Prototypes', 'Object Methods', 'Object Properties',
      'Object Get / Set', 'Object Protection'
    ],
    'JS Functions': [
      'Function Definitions', 'Function Parameters', 'Function Invocation',
      'Function Call', 'Function Apply', 'Function Bind', 'Function Closures'
    ],
    'JS Classes': ['Class Intro', 'Class Inheritance', 'Class Static'],
    'JS Async': ['JS Callbacks', 'JS Asynchronous', 'JS Promises', 'JS Async/Await'],
    'JS HTML DOM': [
      'DOM Intro', 'DOM Methods', 'DOM Document', 'DOM Elements', 'DOM HTML',
      'DOM Forms', 'DOM CSS', 'DOM Animations', 'DOM Events', 'DOM Event Listener',
      'DOM Navigation', 'DOM Nodes', 'DOM Collections', 'DOM Node Lists'
    ],
    'JS Browser BOM': [
      'JS Window', 'JS Screen', 'JS Location', 'JS History', 'JS Navigator',
      'JS Popup Alert', 'JS Timing', 'JS Cookies'
    ],
    'JS Web APIs': [
      'Web API Intro', 'Web Forms API', 'Web History API', 'Web Storage API',
      'Web Worker API', 'Web Fetch API', 'Web Geolocation API'
    ],
    'JS AJAX': [
      'AJAX Intro', 'AJAX XMLHttp', 'AJAX Request', 'AJAX Response', 'AJAX XML File',
      'AJAX PHP', 'AJAX ASP', 'AJAX Database', 'AJAX Applications', 'AJAX Examples'
    ],
    'JS JSON': [
      'JSON Intro', 'JSON Syntax', 'JSON vs XML', 'JSON Data Types', 'JSON Parse',
      'JSON Stringify', 'JSON Objects', 'JSON Arrays', 'JSON Server', 'JSON PHP',
      'JSON HTML', 'JSON JSONP'
    ],
    'JS vs jQuery': ['jQuery Selectors', 'jQuery HTML', 'jQuery CSS', 'jQuery DOM'],
    'JS Graphics': ['JS Graphics', 'JS Canvas', 'JS Plotly', 'JS Chart.js', 'JS Google Chart', 'JS D3.js'],
    'JS Examples': [
      'JS Examples', 'JS HTML DOM', 'JS HTML Input', 'JS HTML Objects', 'JS HTML Events',
      'JS Browser', 'JS Editor', 'JS Exercises', 'JS Quiz', 'JS Website', 'JS Syllabus',
      'JS Study Plan', 'JS Interview Prep', 'JS Bootcamp', 'JS Certificate'
    ],
    'JS References': ['JavaScript Objects', 'HTML DOM Objects'],
  };

  // PHP tutorial topics (full list)
  const phpTopics = {
    'PHP Home': [],
    'PHP Intro': ['What is PHP?', 'PHP Installation', 'PHP Basics'],
    'PHP Syntax': ['Basic Syntax', 'Embedding PHP', 'PHP Tags'],
    'PHP Comments': ['Single-line Comments', 'Multi-line Comments'],
    'PHP Variables': ['Variable Declaration', 'Variable Scope', 'Constants'],
    'PHP Arrays': ['Indexed Arrays', 'Associative Arrays', 'Multidimensional Arrays'],
    'PHP OOP': [
      'Classes and Objects', 'Constructors', 'Inheritance', 'Interfaces',
      'Abstract Classes', 'Traits', 'Namespaces'
    ],
    'PHP MySQL Database': [
      'Connecting to MySQL', 'Creating Databases', 'CRUD Operations',
      'Prepared Statements', 'Error Handling'
    ],
    'PHP Forms': ['Form Handling', 'GET vs POST', 'Form Validation', 'File Uploads'],
    'PHP Advanced': [
      'Sessions', 'Cookies', 'Error Handling', 'Exceptions', 'Filters',
      'Date and Time', 'PHP Security'
    ],
    'PHP XML': ['XML Parsing', 'SimpleXML', 'DOMDocument'],
    'PHP - AJAX': ['AJAX Basics', 'PHP with AJAX', 'AJAX Examples'],
    'PHP Examples': ['Login System', 'File Upload', 'Simple CRUD App'],
    'PHP References': ['PHP Functions', 'PHP Superglobals', 'PHP Constants'],
  };

  // SQL tutorial topics (full list)
  const sqlTopics = {
    'SQL HOME': [],
    'SQL Intro': ['What is SQL?', 'SQL Basics'],
    'SQL Syntax': ['Basic Syntax', 'Query Structure'],
    'SQL Select': ['SELECT Statement', 'Selecting Columns'],
    'SQL Select Distinct': ['DISTINCT Keyword'],
    'SQL Where': ['WHERE Clause', 'Filtering Data'],
    'SQL Order By': ['ORDER BY Clause', 'Sorting Results'],
    'SQL And': ['AND Operator'],
    'SQL Or': ['OR Operator'],
    'SQL Not': ['NOT Operator'],
    'SQL Insert Into': ['INSERT INTO Statement', 'Adding Data'],
    'SQL Null Values': ['Handling NULLs'],
    'SQL Update': ['UPDATE Statement', 'Modifying Data'],
    'SQL Delete': ['DELETE Statement', 'Removing Data'],
    'SQL Select Top': ['TOP, LIMIT, ROWNUM'],
    'SQL Aggregate Functions': ['Using Aggregate Functions'],
    'SQL Min and Max': ['MIN', 'MAX'],
    'SQL Count': ['COUNT Function'],
    'SQL Sum': ['SUM Function'],
    'SQL Avg': ['AVG Function'],
    'SQL atlike': ['LIKE Operator', 'Pattern Matching'],
    'SQL Wildcards': ['Wildcards in SQL'],
    'SQL In': ['IN Operator'],
    'SQL Between': ['BETWEEN Operator'],
    'SQL Aliases': ['AS Keyword', 'Column Aliases', 'Table Aliases'],
    'SQL Joins': ['Overview of Joins'],
    'SQL Inner Join': ['INNER JOIN'],
    'SQL Left Join': ['LEFT JOIN'],
    'SQL Right Join': ['RIGHT JOIN'],
    'SQL Full Join': ['FULL JOIN'],
    'SQL Self Join': ['SELF JOIN'],
    'SQL Union': ['UNION Operator'],
    'SQL Group By': ['GROUP BY Clause'],
    'SQL Having': ['HAVING Clause'],
    'SQL Exists': ['EXISTS Operator'],
    'SQL Any, All': ['ANY', 'ALL'],
    'SQL Select Into': ['SELECT INTO Statement'],
    'SQL Insert Into Select': ['INSERT INTO SELECT'],
    'SQL Case': ['CASE Statement'],
    'SQL Null Functions': ['ISNULL', 'COALESCE', 'NULLIF'],
    'SQL Stored Procedures': ['Creating Stored Procedures'],
    'SQL Comments': ['Single-line', 'Multi-line'],
    'SQL Operators': ['Arithmetic', 'Comparison', 'Logical'],
    'SQL Database': [
      'SQL Create DB', 'SQL Drop DB', 'SQL Backup DB', 'SQL Create Table',
      'SQL Drop Table', 'SQL Alter Table', 'SQL Constraints', 'SQL Not Null',
      'SQL Unique', 'SQL Primary Key', 'SQL Foreign Key', 'SQL Check',
      'SQL Default', 'SQL Index', 'SQL Auto Increment', 'SQL Dates', 'SQL Views',
      'SQL Injection', 'SQL Hosting', 'SQL Data Types'
    ],
    'SQL References': [
      'SQL Keywords', 'MySQL Functions', 'SQL Server Functions',
      'MS Access Functions', 'SQL Quick Ref'
    ],
    'SQL Examples': [
      'SQL Examples', 'SQL Editor', 'SQL Quiz', 'SQL Exercises', 'SQL Server',
      'SQL Syllabus', 'SQL Study Plan', 'SQL Bootcamp', 'SQL Certificate',
      'SQL Training'
    ],
  };

  // React tutorial topics (full list)
  const reactTopics = {
    'React Home': [],
    'React Intro': ['What is React?', 'Why Use React?'],
    'React Get Started': ['Setup', 'Create React App'],
    'React Upgrade': ['Upgrading React', 'Migration Guide'],
    'React ES6': ['Arrow Functions', 'Classes', 'Destructuring'],
    'React Render HTML': ['Rendering Elements', 'ReactDOM'],
    'React JSX': ['JSX Basics', 'JSX Expressions'],
    'React Components': ['Functional Components', 'Class Components'],
    'React Class': ['Class Syntax', 'Lifecycle Methods'],
    'React Props': ['Passing Props', 'Prop Types'],
    'React Events': ['Handling Events', 'Event Bindings'],
    'React Conditionals': ['If Statements', 'Ternary Operators'],
    'React Lists': ['Mapping Arrays', 'Keys in Lists'],
    'React Forms': ['Controlled Components', 'Form Handling'],
    'React Router': ['Routing Basics', 'Nested Routes'],
    'React Memo': ['Memoization', 'Performance Optimization'],
    'React PASTE Styling': ['Inline Styles', 'CSS Modules'],
    'React Sass Styling': ['Using Sass', 'Sass Setup'],
    'React Hooks': [
      'What is a Hook?', 'useState', 'useEffect', 'useContext', 'useRef',
      'useReducer', 'useCallback', 'useMemo', 'Custom Hooks'
    ],
    'React Exercises': [
      'React Compiler', 'React Quiz', 'React Exercises', 'React Syllabus',
      'React Study Plan', 'React Server', 'React Interview Prep', 'React Certificate'
    ],
  };

  // MySQL tutorial topics (full list)
  const mysqlTopics = {
    'MySQL HOME': [],
    'MySQL Intro': ['What is MySQL?', 'MySQL Features'],
    'MySQL RDBMS': ['Relational Databases', 'MySQL vs SQL'],
    'MySQL SQL': [
      'MySQL SQL', 'MySQL SELECT', 'MySQL WHERE', 'MySQL AND, OR, NOT',
      'MySQL ORDER BY', 'MySQL INSERT INTO', 'MySQL NULL Values', 'MySQL UPDATE',
      'MySQL DELETE', 'MySQL LIMIT', 'MySQL MIN and MAX', 'MySQL COUNT, AVG, SUM',
      'MySQL LIKE', 'MySQL Wildcards', 'MySQL IN', 'MySQL BETWEEN', 'MySQL Aliases',
      'MySQL Joins', 'MySQL INNER JOIN', 'MySQL LEFT JOIN', 'MySQL RIGHT JOIN',
      'MySQL CROSS JOIN', 'MySQL Self Join', 'MySQL UNION', 'MySQL GROUP BY',
      'MySQL HAVING', 'MySQL EXISTS', 'MySQL ANY, ALL', 'MySQL INSERT SELECT',
      'MySQL CASE', 'MySQL Null Functions', 'MySQL Comments', 'MySQL Operators'
    ],
    'MySQL Database': [
      'MySQL Create DB', 'MySQL Drop DB', 'MySQL Create Table', 'MySQL Drop Table',
      'MySQL Alter Table', 'MySQL Constraints', 'MySQL Not Null', 'MySQL Unique',
      'MySQL Primary Key', 'MySQL Foreign Key', 'MySQL Check', 'MySQL Default',
      'MySQL Create Index', 'MySQL Auto Increment', 'MySQL Dates', 'MySQL Views'
    ],
    'MySQL References': ['MySQL Data Types', 'MySQL Functions'],
    'MySQL Examples': [
      'MySQL Examples', 'MySQL Editor', 'MySQL Quiz', 'MySQL Exercises',
      'MySQL Syllabus', 'MySQL Study Plan', 'MySQL Certificate'
    ],
  };

  // Node.js tutorial topics (full list)
  const nodejsTopics = {
    'Node.js HOME': [],
    'Node.js Intro': ['What is Node.js?', 'Why Node.js?'],
    'Node.js Get Started': ['Installation', 'First App'],
    'Node.js Modules': ['Built-in Modules', 'Custom Modules'],
    'Node.js HTTP Module': ['Creating a Server', 'Handling Requests'],
    'Node.js File System': ['Reading Files', 'Writing Files'],
    'Node.js URL Module': ['Parsing URLs', 'URL Methods'],
    'Node.js NPM': ['Installing Packages', 'Managing Dependencies'],
    'Node.js Events': ['EventEmitter', 'Handling Events'],
    'Node.js Upload Files': ['File Upload with Formidable'],
    'Node.js Email': ['Sending Emails with Nodemailer'],
    'Node.js MySQL': [
      'MySQL Get Started', 'MySQL Create Database', 'MySQL Create Table',
      'MySQL Insert Into', 'MySQL Select From', 'MySQL Where', 'MySQL Order By',
      'MySQL Delete', 'MySQL Drop Table', 'MySQL Update', 'MySQL Limit', 'MySQL Join'
    ],
    'Node.js MongoDB': [
      'MongoDB Get Started', 'MongoDB Create DB', 'MongoDB Collection',
      'MongoDB Insert', 'MongoDB Find', 'MongoDB Query', 'MongoDB Sort',
      'MongoDB Delete', 'MongoDB Drop Collection', 'MongoDB Update', 'MongoDB Limit',
      'MongoDB Join'
    ],
    'Raspberry Pi': [
      'RasPi Get Started', 'RasPi GPIO Introduction', 'RasPi Blinking LED',
      'RasPi LED & Pushbutton', 'RasPi Flowing LEDs', 'RasPi WebSocket',
      'RasPi RGB LED WebSocket', 'RasPi Components'
    ],
    'Node.js Reference': ['Built-in Modules'],
    'Node.js Examples': [
      'Node.js Editor', 'Node.js Compiler', 'Node.js Server', 'Node.js Syllabus',
      'Node.js Study Plan', 'Node.js Certificate'
    ],
  };

  // C++ tutorial topics (full list)
  const cppTopics = {
    'C++ HOME': [],
    'C++ Intro': ['What is C++?', 'Why C++?'],
    'C++ Get Started': ['Setup', 'First Program'],
    'C++ Syntax': ['Basic Syntax', 'Program Structure'],
    'C++ Output': ['cout', 'endl'],
    'C++ Comments': ['Single-line', 'Multi-line'],
    'C++ Variables': ['Declaration', 'Initialization'],
    'C++ User Input': ['cin'],
    'C++ Data Types': ['int', 'float', 'char', 'bool'],
    'C++ Operators': ['Arithmetic', 'Relational', 'Logical'],
    'C++ Strings': ['string class', 'C-style strings'],
    'C++ Math': ['Math Functions'],
    'C++ Booleans': ['true', 'false'],
    'C++ If...Else': ['if', 'else if', 'else'],
    'C++ Switch': ['switch-case'],
    'C++ While Loop': ['while', 'do-while'],
    'C++ For Loop': ['for loop'],
    'C++ Break/Continue': ['break', 'continue'],
    'C++ Arrays': ['Array Declaration', 'Multi-dimensional Arrays'],
    'C++ Structures': ['struct'],
    'C++ Enums': ['enum'],
    'C++ References': ['Reference Variables'],
    'C++ Pointers': ['Pointers Basics', 'Pointer Arithmetic'],
    'C++ Functions': [
      'C++ Functions', 'C++ Function Parameters', 'C++ Function Overloading',
      'C++ Scope', 'C++ Recursion'
    ],
    'C++ Classes': [
      'C++ OOP', 'C++ Classes/Objects', 'C++ Class Methods', 'C++ Constructors',
      'C++ Access Specifiers', 'C++ Encapsulation', 'C++ Inheritance',
      'C++ Polymorphism', 'C++ Files', 'C++ Exceptions', 'C++ Date'
    ],
    'C++ Data Structures': [
      'C++ Data Structures & STL', 'C++ Vectors', 'C++ List', 'C++ Stacks',
      'C++ Queues', 'C++ Deque', 'C++ Sets', 'C++ Maps', 'C++ Iterators',
      'C++ Algorithms'
    ],
    'C++ How To': ['C++ Add Two Numbers', 'C++ Random Numbers'],
    'C++ Reference': [
      'C++ Reference', 'C++ Keywords', 'C++ <iostream>', 'C++ <fstream>',
      'C++ <cmath>', 'C++ <string>', 'C++ <cstring>', 'C++ <ctime>',
      'C++ <vector>', 'C++ <algorithm>'
    ],
    'C++ Examples': [
      'C++ Examples', 'C++ Real-Life Examples', 'C++ Compiler', 'C++ Exercises',
      'C++ Quiz', 'C++ Syllabus', 'C++ Study Plan', 'C++ Certificate'
    ],
  };

  // Python tutorial topics (full list)
  const pythonTopics = {
    'Python HOME': [],
    'Python Intro': ['What is Python?', 'Why Python?'],
    'Python Get Started': ['Installation', 'First Program'],
    'Python Syntax': ['Basic Syntax', 'Indentation'],
    'Python Comments': ['Single-line', 'Multi-line'],
    'Python Variables': ['Variable Assignment', 'Variable Names'],
    'Python Data Types': ['int', 'float', 'str', 'list', 'tuple', 'dict', 'set'],
    'Python Numbers': ['Integers', 'Floating Point'],
    'Python Casting': ['Type Conversion'],
    'Python Strings': ['String Operations', 'String Methods'],
    'Python Booleans': ['True', 'False'],
    'Python Operators': ['Arithmetic', 'Comparison', 'Logical'],
    'Python Lists': ['List Operations', 'List Methods'],
    'Python Tuples': ['Tuple Operations'],
    'Python Sets': ['Set Operations', 'Set Methods'],
    'Python Dictionaries': ['Dict Operations', 'Dict Methods'],
    'Python If...Else': ['if', 'elif', 'else'],
    'Python While Loops': ['while loop'],
    'Python For Loops': ['for loop'],
    'Python Functions': ['Function Definition', 'Function Arguments'],
    'Python Lambda': ['Lambda Functions'],
    'Python Arrays': ['Using Lists as Arrays'],
    'Python Classes/Objects': ['Class Definition', 'Object Creation'],
    'Python Inheritance': ['Inheritance Basics'],
    'Python Iterators': ['Iterator Protocol'],
    'Python Polymorphism': ['Polymorphism Basics'],
    'Python Scope': ['Local vs Global Scope'],
    'Python Modules': ['Importing Modules', 'Creating Modules'],
    'Python Dates': ['datetime Module'],
    'Python Math': ['Math Module'],
    'Python JSON': ['JSON Handling'],
    'Python RegEx': ['Regular Expressions'],
    'Python PIP': ['Package Management'],
    'Python Try...Except': ['Exception Handling'],
    'Python User Input': ['input() Function'],
    'Python String Formatting': ['f-strings', 'format()'],
    'File Handling': [
      'Python File Handling', 'Python Read Files', 'Python Write/Create Files',
      'Python Delete Files'
    ],
    'Python Modules': [
      'NumPy Tutorial', 'Pandas Tutorial', 'SciPy Tutorial', 'Django Tutorial'
    ],
    'Python Matplotlib': [
      'Matplotlib Intro', 'Matplotlib Get Started', 'Matplotlib Pyplot',
      'Matplotlib Plotting', 'Matplotlib Markers', 'Matplotlib Line',
      'Matplotlib Labels', 'Matplotlib Grid', 'Matplotlib Subplot',
      'Matplotlib Scatter', 'Matplotlib Bars', 'Matplotlib Histograms',
      'Matplotlib Pie Charts'
    ],
    'Machine Learning': [
      'Getting Started', 'Mean Median Mode', 'Standard Deviation', 'Percentile',
      'Data Distribution', 'Normal Data Distribution', 'Scatter Plot',
      'Linear Regression', 'Polynomial Regression', 'Multiple Regression',
      'Scale', 'Train/Test', 'Decision Tree', 'Confusion Matrix',
      'Hierarchical Clustering', 'Logistic Regression', 'Grid Search',
      'Categorical Data', 'K-means', 'Bootstrap Aggregation', 'Cross Validation',
      'AUC - ROC Curve', 'K-nearest neighbors'
    ],
    'Python MySQL': [
      'MySQL Get Started', 'MySQL Create Database', 'MySQL Create Table',
      'MySQL Insert', 'MySQL Select', 'MySQL Where', 'MySQL Order By',
      'MySQL Delete', 'MySQL Drop Table', 'MySQL Update', 'MySQL Limit',
      'MySQL Join'
    ],
    'Python MongoDB': [
      'MongoDB Get Started', 'MongoDB Create DB', 'MongoDB Collection',
      'MongoDB Insert', 'MongoDB Find', 'MongoDB Query', 'MongoDB Sort',
      'MongoDB Delete', 'MongoDB Drop Collection', 'MongoDB Update', 'MongoDB Limit'
    ],
    'Python Reference': [
      'Python Overview', 'Python Built-in Functions', 'Python String Methods',
      'Python List Methods', 'Python Dictionary Methods', 'Python Tuple Methods',
      'Python Set Methods', 'Python File Methods', 'Python Keywords',
      'Python Exceptions', 'Python Glossary'
    ],
    'Module Reference': [
      'Random Module', 'Requests Module', 'Statistics Module', 'Math Module',
      'cMath Module'
    ],
    'Python How To': ['Remove List Duplicates', 'Reverse a String', 'Add Two Numbers'],
    'Python Examples': [
      'Python Examples', 'Python Compiler', 'Python Exercises', 'Python Quiz',
      'Python Server', 'Python Syllabus', 'Python Study Plan', 'Python Interview Q&A',
      'Python Bootcamp', 'Python Certificate', 'Python Training'
    ],
  };

  // Java tutorial topics (full list)
  const javaTopics = {
    'Java HOME': [],
    'Java Intro': ['What is Java?', 'Why Java?'],
    'Java Get Started': ['Setup', 'First Program'],
    'Java Syntax': ['Basic Syntax', 'Program Structure'],
    'Java Output': ['System.out.println'],
    'Java Comments': ['Single-line', 'Multi-line'],
    'Java Variables': ['Variable Declaration', 'Variable Types'],
    'Java Data Types': ['Primitive Types', 'Reference Types'],
    'Java Type Casting': ['Widening', 'Narrowing'],
    'Java Operators': ['Arithmetic', 'Relational', 'Logical'],
    'Java Strings': ['String Class', 'String Methods'],
    'Java Math': ['Math Class'],
    'Java Booleans': ['true', 'false'],
    'Java If...Else': ['if', 'else if', 'else'],
    'Java Switch': ['switch-case'],
    'Java While Loop': ['while', 'do-while'],
    'Java For Loop': ['for loop', 'enhanced for'],
    'Java Break/Continue': ['break', 'continue'],
    'Java Arrays': ['Array Declaration', 'Array Methods'],
    'Java Methods': [
      'Java Methods', 'Java Method Parameters', 'Java Method Overloading',
      'Java Scope', 'Java Recursion'
    ],
    'Java Classes': [
      'Java OOP', 'Java Classes/Objects', 'Java Class Attributes', 'Java Class Methods',
      'Java Constructors', 'Java Modifiers', 'Java Encapsulation', 'Java Packages / API',
      'Java Inheritance', 'Java Polymorphism', 'Java Inner Classes', 'Java Abstraction',
      'Java Interface', 'Java Enums', 'Java User Input', 'Java Date'
    ],
    'Java Data Structures': [
      'Java ArrayList', 'Java LinkedList', 'Java List Sorting', 'Java HashMap',
      'Java HashSet', 'Java Iterator', 'Java Wrapper Classes'
    ],
    'Java Advanced': [
      'Java Exceptions', 'Java RegEx', 'Java Threads', 'Java Lambda',
      'Java Advanced Sorting'
    ],
    'Java File Handling': [
      'Java Files', 'Java Create/Write Files', 'Java Read Files', 'Java Delete Files'
    ],
    'Java How To\'s': [
      'Add Two Numbers', 'Count Words', 'Reverse a String', 'Sum of Array Elements',
      'Convert String to Array', 'Sort an Array', 'Find Array Average',
      'Find Smallest Element', 'ArrayList Loop', 'HashMap Loop', 'Loop Through an Enum',
      'Area of Rectangle', 'Even or Odd Number', 'Positive or Negative', 'Square Root',
      'Random Number'
    ],
    'Java Reference': [
      'Java Reference', 'Java Keywords', 'Java String Methods', 'Java Math Methods',
      'Java Output Methods', 'Java Arrays Methods', 'Java ArrayList Methods',
      'Java LinkedList Methods', 'Java HashMap Methods', 'Java Scanner Methods',
      'Java Iterator Methods', 'Java Errors & Exceptions'
    ],
    'Java Examples': [
      'Java Examples', 'Java Compiler', 'Java Exercises', 'Java Quiz', 'Java Server',
      'Java Syllabus', 'Java Study Plan', 'Java Certificate'
    ],
  };

  // Bootstrap 5 tutorial topics (full list)
  const bootstrapTopics = {
    'BS5 HOME': [],
    'BS5 Get Started': ['Setup', 'CDN Links'],
    'BS5 Containers': ['Container Classes'],
    'BS5 Grid Basic': ['Grid System Basics'],
    'BS5 Typography': ['Headings', 'Text Utilities'],
    'BS5 Colors': ['Color Classes'],
    'BS5 Tables': ['Table Styles'],
    'BS5 Images': ['Image Classes'],
    'BS5 Jumbotron': ['Jumbotron Component'],
    'BS5 Alerts': ['Alert Styles'],
    'BS5 Buttons': ['Button Styles', 'Button Sizes'],
    'BS5 Button Groups': ['Button Group Layouts'],
    'BS5 Badges': ['Badge Styles'],
    'BS5 Progress Bars': ['Progress Bar Styles'],
    'BS5 Spinners': ['Spinner Types'],
    'BS5 Pagination': ['Pagination Components'],
    'BS5 List Groups': ['List Group Styles'],
    'BS5 Cards': ['Card Layouts'],
    'BS5 Dropdowns': ['Dropdown Menus'],
    'BS5 Collapse': ['Collapse Component'],
    'BS5 Navs': ['Nav Styles'],
    'BS5 Navbar': ['Navbar Components'],
    'BS5 Carousel': ['Carousel Slides'],
    'BS5 Modal': ['Modal Dialogs'],
    'BS5 Tooltip': ['Tooltip Options'],
    'BS5 Popover': ['Popover Options'],
    'BS5 Toast': ['Toast Notifications'],
    'BS5 Scrollspy': ['Scrollspy Behavior'],
    'BS5 Offcanvas': ['Offcanvas Sidebar'],
    'BS5 Utilities': ['Utility Classes'],
    'BS5 Dark Mode': ['Dark Mode Support'],
    'BS5 Flex': ['Flexbox Utilities'],
    'Bootstrap 5 Forms': [
      'BS5 Forms', 'BS5 Select Menus', 'BS5 Checks and Radios', 'BS5 Range',
      'BS5 Input Groups', 'BS5 Floating Labels', 'BS5 Form Validation'
    ],
    'Bootstrap 5 Grid': [
      'BS5 Grid System', 'BS5 Stacked/Horizontal', 'BS5 Grid XSmall',
      'BS5 Grid Small', 'BS5 Grid Medium', 'BS5 Grid Large', 'BS5 Grid XLarge',
      'BS5 Grid XXL', 'BS5 Grid Examples'
    ],
    'Bootstrap 5 Other': [
      'BS5 Basic Template', 'BS5 Editor', 'BS5 Exercises', 'BS5 Quiz',
      'BS5 Syllabus', 'BS5 Study Plan', 'BS5 Interview Prep', 'BS5 Certificate'
    ],
  };

  // jQuery tutorial topics (full list)
  const jqueryTopics = {
    'jQuery HOME': [],
    'jQuery Intro': ['What is jQuery?', 'Why jQuery?'],
    'jQuery Get Started': ['Setup', 'CDN Links'],
    'jQuery Syntax': ['Basic Syntax'],
    'jQuery Selectors': ['Element Selectors', 'ID Selectors', 'Class Selectors'],
    'jQuery Events': ['Event Handling', 'Common Events'],
    'jQuery Effects': [
      'jQuery Hide/Show', 'jQuery Fade', 'jQuery Slide', 'jQuery Animate',
      'jQuery stop()', 'jQuery Callback', 'jQuery Chaining'
    ],
    'jQuery HTML': [
      'jQuery Get', 'jQuery Set', 'jQuery Add', 'jQuery Remove',
      'jQuery CSS Classes', 'jQuery css()', 'jQuery Dimensions'
    ],
    'jQuery Traversing': [
      'jQuery Traversing', 'jQuery Ancestors', 'jQuery Descendants',
      'jQuery Siblings', 'jQuery Filtering'
    ],
    'jQuery AJAX': [
      'jQuery AJAX Intro', 'jQuery Load', 'jQuery Get/Post'
    ],
    'jQuery Misc': [
      'jQuery noConflict()', 'jQuery Filters'
    ],
    'jQuery Examples': [
      'jQuery Examples', 'jQuery Editor', 'jQuery Quiz', 'jQuery Exercises',
      'jQuery Syllabus', 'jQuery Study Plan', 'jQuery Certificate'
    ],
    'jQuery References': [
      'jQuery Overview', 'jQuery Selectors', 'jQuery Events', 'jQuery Effects',
      'jQuery HTML/CSS', 'jQuery Traversing', 'jQuery AJAX', 'jQuery Misc',
      'jQuery Properties'
    ],
  };

  const topicsMap = {
    HTML: htmlTopics,
    CSS: cssTopics,
    JavaScript: jsTopics,
    PHP: phpTopics,
    SQL: sqlTopics,
    React: reactTopics,
    MySQL: mysqlTopics,
    'Node.js': nodejsTopics,
    'C++': cppTopics,
    Python: pythonTopics,
    Java: javaTopics,
    Bootstrap: bootstrapTopics,
    jQuery: jqueryTopics,
  };

  const toggleSidebar = (category) => {
    setIsSidebarOpen(true);
    setActiveCategory(category);
    setSelectedTopic(`${category === 'Bootstrap' ? 'BS5' : category} HOME`);
  };

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };

  const topics = topicsMap[activeCategory] || {};

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header onToggleSidebar={toggleSidebar} />

        <div className="d-flex flex-grow-1">
          {/* Sidebar with Scrollbar */}
          {isSidebarOpen && activeCategory && (
            <div
              className="bg-dark text-white p-3 transition-all duration-300 ease-in-out w-25"
              style={{
                minWidth: '200px',
                maxHeight: 'calc(100vh - 150px)', // Adjust height based on header/footer
                overflowY: 'auto', // Enable vertical scrolling
              }}
            >
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="btn btn-outline-light mb-3 w-100 sticky-top"
                style={{ top: '0', zIndex: '1', backgroundColor: '#212529' }} // Sticky close button
              >
                Close Sidebar
              </button>
              <ul className="nav flex-column">
                {Object.keys(topics).map((topic) => (
                  <li key={topic} className="nav-item">
                    <button
                      onClick={() => handleTopicClick(topic)}
                      className={`nav-link text-white w-100 text-start ${
                        selectedTopic === topic ? 'active' : ''
                      }`}
                    >
                      {topic}
                    </button>
                    {selectedTopic === topic && topics[topic].length > 0 && (
                      <ul className="list-unstyled ps-3">
                        {topics[topic].map((subtopic) => (
                          <li key={subtopic}>
                            <button
                              onClick={() => handleTopicClick(`${topic} - ${subtopic}`)}
                              className="nav-link text-white"
                            >
                              {subtopic}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Main Content */}
          <main className="flex-grow-1 p-4 bg-light">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tutorial/:id" element={<Tutorial />} />
              <Route path="/editor" element={<CodeEditor />} />
            </Routes>
            {isSidebarOpen && activeCategory && (
              <div className="mt-3">
                <h2 className="h3 font-weight-bold">{selectedTopic}</h2>
                <p>{`Content for ${selectedTopic}. This section dynamically updates based on the selected topic.`}</p>
                {/* Example content for specific topics */}
                {selectedTopic === 'HTML Introduction' && (
                  <pre className="bg-dark text-white p-2 rounded">
                    {'<h1>Hello World</h1>'}
                  </pre>
                )}
                {selectedTopic === 'CSS Syntax' && (
                  <pre className="bg-dark text-white p-2 rounded">
                    {'h1 { color: blue; }'}
                  </pre>
                )}
                {selectedTopic === 'JS Introduction' && (
                  <pre className="bg-dark text-white p-2 rounded">
                    {'console.log("Hello World");'}
                  </pre>
                )}
                {selectedTopic === 'PHP Syntax' && (
                  <pre className="bg-dark text-white p-2 rounded">
                    {'<?php\n  echo "Hello World";\n?>'}
                  </pre>
                )}
                {selectedTopic === 'SQL Select' && (
                  <pre className="bg-dark text-white p-2 rounded">
                    {'SELECT * FROM users;'}
                  </pre>
                )}
                {selectedTopic === 'React JSX' && (
                  <pre className="bg-dark text-white p-2 rounded">
                    {'const element = <h1>Hello, world!</h1>;\nReactDOM.render(element, document.getElementById("root"));'}
                  </pre>
                )}
                {selectedTopic === 'MySQL SELECT' && (
                  <pre className="bg-dark text-white p-2 rounded">
                    {'SELECT * FROM employees;'}
                  </pre>
                )}
                {selectedTopic === 'Node.js HTTP Module' && (
                  <pre className="bg-dark text-white p-2 rounded">
                    {'const http = require("http");\nhttp.createServer((req, res) => {\n  res.write("Hello World!");\n  res.end();\n}).listen(8080);'}
                  </pre>
                )}
                {selectedTopic === 'C++ Output' && (
                  <pre className="bg-dark text-white p-2 rounded">
                    {'#include <iostream>\nusing namespace std;\nint main() {\n  cout << "Hello World!";\n  return 0;\n}'}
                  </pre>
                )}
                {selectedTopic === 'Python Intro' && (
                  <pre className="bg-dark text-white p-2 rounded">
                    {'print("Hello World!")'}
                  </pre>
                )}
                {selectedTopic === 'Python Classes/Objects' && (
                  <pre className="bg-dark text-white p-2 rounded">
                    {'class MyClass:\n    x = 5\n\nobj = MyClass()\nprint(obj.x)'}
                  </pre>
                )}
                {selectedTopic === 'Python MySQL - MySQL Select' && (
                  <pre className="bg-dark text-white p-2 rounded">
                    {'import mysql.connector\n\nmydb = mysql.connector.connect(\n  host="localhost",\n  user="root",\n  password="",\n  database="mydb"\n)\n\nmycursor = mydb.cursor()\nmycursor.execute("SELECT * FROM users")\n\nfor x in mycursor:\n  print(x)'}
                  </pre>
                )}
                {selectedTopic === 'Java Intro' && (
                  <pre className="bg-dark text-white p-2 rounded">
                    {'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello World!");\n  }\n}'}
                  </pre>
                )}
                {selectedTopic === 'Java Classes - Java Classes/Objects' && (
                  <pre className="bg-dark text-white p-2 rounded">
                    {'public class MyClass {\n  int x = 5;\n\n  public static void main(String[] args) {\n    MyClass obj = new MyClass();\n    System.out.println(obj.x);\n  }\n}'}
                  </pre>
                )}
                {selectedTopic === 'Java Data Structures - Java ArrayList' && (
                  <pre className="bg-dark text-white p-2 rounded">
                    {'import java.util.ArrayList;\n\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> list = new ArrayList<>();\n    list.add("Apple");\n    list.add("Banana");\n    System.out.println(list);\n  }\n}'}
                  </pre>
                )}
                {selectedTopic === 'BS5 Buttons' && (
                  <pre className="bg-dark text-white p-2 rounded">
                    {'<button type="button" class="btn btn-primary">Primary Button</button>'}
                  </pre>
                )}
                {selectedTopic === 'Bootstrap 5 Forms - BS5 Form Validation' && (
                  <pre className="bg-dark text-white p-2 rounded">
                    {'<form class="needs-validation" novalidate>\n  <div class="mb-3">\n    <label for="inputEmail" class="form-label">Email</label>\n    <input type="email" class="form-control" id="inputEmail" required>\n    <div class="invalid-feedback">Please enter a valid email.</div>\n  </div>\n  <button type="submit" class="btn btn-primary">Submit</button>\n</form>'}
                  </pre>
                )}
                {selectedTopic === 'jQuery Events' && (
                  <pre className="bg-dark text-white p-2 rounded">
                    {'<button id="myButton">Click Me</button>\n<script>\n  $("#myButton").click(function() {\n    alert("Button clicked!");\n  });\n</script>'}
                  </pre>
                )}
                {selectedTopic === 'jQuery Effects - jQuery Fade' && (
                  <pre className="bg-dark text-white p-2 rounded">
                    {'<div id="fadeDiv" style="width:100px;height:100px;background-color:blue;"></div>\n<button id="fadeBtn">Fade Out</button>\n<script>\n  $("#fadeBtn").click(function() {\n    $("#fadeDiv").fadeOut(1000);\n  });\n</script>'}
                  </pre>
                )}
              </div>
            )}
          </main>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
