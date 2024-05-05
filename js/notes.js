function showSubjects(className) {
    // Hide classes section
    document.getElementById('class-list').style.display = 'none';
    // Show subjects section
    document.getElementById('subject-section').style.display = 'block';
    // Populate subjects based on class
    var subjects = ['Science', 'SSt', 'Maths', 'English', 'Hindi'];
    var subjectList = document.getElementById('subject-list');
    subjectList.innerHTML = '';
    subjects.forEach(function(subject) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = "#";
        a.textContent = subject;
        a.onclick = function() {
            showChapters(className, subject);
        };
        li.appendChild(a);
        subjectList.appendChild(li);
    });
}

function showChapters(className, subject) {
    // Hide subjects section
    document.getElementById('subject-section').style.display = 'none';
    // Show chapters section
    document.getElementById('chapter-section').style.display = 'block';
    // Populate chapters
    var chapters = getChaptersForSubjectAndClass(subject, className);
    var chapterList = document.getElementById('chapter-list');
    chapterList.innerHTML = '';
    chapters.forEach(function(chapter) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = "#";
        a.textContent = chapter;
        a.onclick = function() {
            showContent(className, subject, chapter);
        };
        li.appendChild(a);
        chapterList.appendChild(li);
    });
}

function showContent(className, subject, chapter) {
    // Hide chapters section
    document.getElementById('chapter-section').style.display = 'none';
    // Show content section
    document.getElementById('content-section').style.display = 'block';
    // Update PDF link
    var pdfLink = document.getElementById('pdf-link');
    pdfLink.href = "#"; // Set the actual PDF link here
}

function getChaptersForSubjectAndClass(subject, className) {
    // This function should return an array of chapter names based on the subject and class
    // Replace the placeholders with actual chapter names from the NCERT syllabus
    if (subject === 'Science') {
        if (className === '6') {
            return ['Food: Where Does It Come From?', 'Components of Food', 'Fibre to Fabric', 'Sorting Materials Into Groups', 'Separation of Substances'];
        } else if (className === '7') {
            return ['Nutrition in Plants', 'Nutrition in Animals', 'Fibres to Fabrics', 'Heat', 'Acids, Bases, and Salts'];
        } else if (className === '8') {
            return ['Crop Production and Management', 'Microorganisms: Friend and Foe', 'Synthetic Fibres and Plastics', 'Materials: Metals and Non-Metals', 'Coal and Petroleum'];
        } else if (className === '9') {
            return ['Matter in Our Surroundings', 'Is Matter Around Us Pure?', 'Atoms and Molecules', 'Structure of the Atom', 'The Fundamental Unit of Life'];
        } else if (className === '10') {
            return ['Chemical Reactions and Equations', 'Acids, Bases, and Salts', 'Metals and Non-Metals', 'Carbon and Its Compounds', 'Periodic Classification of Elements'];
        } else if (className === '11') {
            return ['Some Basic Concepts of Chemistry', 'Structure of Atom', 'Classification of Elements and Periodicity in Properties', 'Chemical Bonding and Molecular Structure', 'States of Matter: Gases and Liquids'];
        } else if (className === '12') {
            return ['Solid State', 'Solutions', 'Electrochemistry', 'Chemical Kinetics', 'Surface Chemistry'];
        }
    } else if (subject === 'SSt') {
        if (className === '6') {
            return ['The Earth in the Solar System', 'Globe: Latitudes and Longitudes', 'Motions of the Earth', 'Maps'];
        } else if (className === '7') {
            return ['Environment', 'Inside Our Earth', 'Our Changing Earth', 'Air', 'Water'];
        } else if (className === '8') {
            return ['Resources and Development', 'Water Resources', 'Agriculture', 'Minerals and Energy Resources', 'Industries'];
        } else if (className === '9') {
            return ['India - Size and Location', 'Physical Features of India', 'Climate', 'Natural Vegetation and Wildlife', 'Population'];
        } else if (className === '10') {
            return ['Development', 'Sectors of the Indian Economy', 'Money and Credit', 'Globalization and the Indian Economy', 'Consumer Rights'];
        } else if (className === '11') {
            return ['Indian Constitution at Work', 'Political Theory', 'Indian Constitution: Formation, Features, and Philosophy', 'Rights in the Indian Constitution', 'Election and Representation'];
        } else if (className === '12') {
            return ['The Cold War Era', 'The End of Bipolarity', 'US Hegemony in World Politics', 'Alternative Centres of Power', 'Contemporary South Asia'];
        }
    } else if (subject === 'Maths') {
        if (className === '6') {
            return ['Knowing Our Numbers', 'Whole Numbers', 'Playing with Numbers', 'Basic Geometrical Ideas', 'Understanding Elementary Shapes'];
        } else if (className === '7') {
            return ['Integers', 'Fractions and Decimals', 'Data Handling', 'Simple Equations', 'Lines and Angles'];
        } else if (className === '8') {
            return ['Rational Numbers', 'Linear Equations in One Variable', 'Understanding Quadrilaterals', 'Practical Geometry', 'Data Handling'];
        } else if (className === '9') {
            return ['Number Systems', 'Polynomials', 'Coordinate Geometry', 'Linear Equations in Two Variables', 'Introduction to Euclid’s Geometry'];
        } else if (className === '10') {
            return ['Real Numbers', 'Polynomials', 'Pair of Linear Equations in Two Variables', 'Quadratic Equations', 'Arithmetic Progressions'];
        } else if (className === '11') {
            return ['Sets', 'Relations and Functions', 'Trigonometric Functions', 'Principle of Mathematical Induction', 'Complex Numbers and Quadratic Equations'];
        } else if (className === '12') {
            return ['Relations and Functions', 'Inverse Trigonometric Functions', 'Matrices', 'Determinants', 'Continuity and Differentiability'];
        }
    } else if (subject === 'English') {
        if (className === '6') {
            return ['Honeysuckle', 'A Pact With the Sun'];
        } else if (className === '7') {
            return ['Honeycomb', 'An Alien Hand'];
        } else if (className === '8') {
            return ['Honeydew', 'It So Happened'];
        } else if (className === '9') {
            return ['Beehive English Textbook', 'Moments Supplementary Reader'];
        } else if (className === '10') {
            return ['First Flight', 'Footprints Without Feet'];
        } else if (className === '11') {
            return ['Hornbill', 'Snapshots Supplementary Reader'];
        } else if (className === '12') {
            return ['Flamingo', 'Vistas'];
        }
    } else if (subject === 'Hindi') {
        if (className === '6') {
            return ['Vasant', 'Durva', 'Bal Ram Katha'];
        } else if (className === '7') {
            return ['Vasant', 'Durva', 'Bal Mahabharat Katha'];
        } else if (className === '8') {
            return ['Vasant', 'Durva', 'Bharat Ki Khoj'];
        } else if (className === '9') {
            return ['Kshitij', 'Sparsh', 'Kritika', 'Sanchayan'];
        } else if (className === '10') {
            return ['Kshitij', 'Sparsh', 'Kritika', 'Sanchayan'];
        } else if (className === '11') {
            return ['Antra', 'Aroh', 'Vitan', 'Antral'];
        } else if (className === '12') {
            return ['Aaroh', 'Vitan', 'Antral', 'Antral'];
        }
    }
    // Return an empty array if no chapters are found
    return [];
}

function showContent(className, subject, chapter) {
    // Hide chapters section
    document.getElementById('chapter-section').style.display = 'none';
    // Show content section
    document.getElementById('content-section').style.display = 'block';
    // Update PDF link
    var pdfLink = document.getElementById('pdf-link');
    pdfLink.href = `/assets/${className}/${subject}/${chapter}/ancient.pdf`; // Set the actual PDF link here
}

