
        /*Defining Table
         *Input:Get part of speech words needed for story
         *Process:Create a story for the reader
         *Output:The story
         */

        function whatISaw() {
            
            // var name = document.getElementById('inputName').value; //

            var verb1 = document.getElementById('inputVerb1').value;
            var verb2 = document.getElementById('inputVerb2').value;
            var verb3 = document.getElementById('inputVerb3').value;
            var verb4 = document.getElementById('inputVerb4').value;
            var pluralNoun1 = document.getElementById('inputPluralNoun1').value;
            var adjective1 = document.getElementById('inputadjective1').value;
            var feeling1 = document.getElementById('inputfeeling1').value;
            var story = "While I " + verb1 + " down the street, I see three, " + adjective1 + " " + pluralNoun1 + " " +
                verb2 + " across the street from me. " + "I can't believe what I am seeing. " + "I " + verb3 +
                " home as quick as I can. I " + verb4 + " on my bed because I feel so " + feeling1 +
                ". I know nobody will ever believe me.";
            document.getElementById("outputDiv").innerHTML = story;
        }
