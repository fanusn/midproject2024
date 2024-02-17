// רשימה של המערכות
const jsonData = {

    "workcategory": [
        {

            "id": 1,

            "name": "אסדרת עיסוקים",

            "description": " האגף עוסק בהליכי רגולציה בשלושה תחומים: אסדרת עיסוקים חדשים, בחינת הרגולציה הקיימת ובחינת זכאות לרישום ורישוי בפנקס בעלי מקצוע.",

            "info": "⁠ אסדרת עיסוקים חדשים במשק, היינו הגבלת עיסוק בחקיקה לבעלי מקצוע שהוסמכו לכך בחוק."
        },

        {
            "id": 2,

            "name": "אסטרטגיה ותכנון מדיניות",

            "description": "האגף מהווה כלי עזר בידי הנהלת המשרד, לצורך קבלת החלטות מושכלות מבוססות נתונים ולצורך מחקר ותכנון ארוך-טווח.  ",

            "info": "תפקידי האגף הם תכנון אסטרטגיה ארוכת טווח והיערכות לשינויים בשוק העבודה,מחקר כלכלי, מדיניות רגולציה וניהול מערך תוכניות העבודה."
        },


        {
            "id": 3,

            "name": "עידוד תעסוקת הורים",

            "description": "אגף בכיר לעידוד תעסוקת הורים פועל מתוקף חוק הפיקוח על מעונות ומטרותיו הינן קביעת מדיניות להפעלת משפחתונים והצהרונים.",

            "info": "תפקידי האגף הם ישום שכר לימוד מדורג בספיסוד ממשלתי לאימהות עובדות והפעלת מערך פיקוח ובקרה להבטחת רמת השירות על פי סטנדרטים מקצועיים."
        },
        {
            "id": 4,

            "name": "הכשרה מקצועית ופיתוח כח אדם",

            "description": "האגף מהווה זרוע ממשלתית להכשרת כוח אדם מקצועי במטרה לסייע בצמצום פערים חברתיים ולהעלות את פריון משק התעסוקה בישראל",

            "info": "פיתוח ההון האנושי של החברה הישראלית,על ידי בניית תשתית כוח אדם מצקועי, טכנולוגי המותאם למשק, לתעשייה ולמעסיקים, תוך זיקה למגמות משתנות בכלכלה הישראלית."
        },
        {
            "id": 5,

            "name": "כח אדם לשעת חרום",

            "description": "האגף אחראי על מזעור הפגיעה ברציפות התפקודית של המשק החיוני בהיבט של כוח אדם, מכוח חוק שרות עבודה בשעת חירום.",

            "info": "גיוס ושחרור עובדי המפעלים החיוניים ו/או המפעלים, למתן שירותים קיומיים וכח אדם במשק , באמצעות צווים קיבוציים ו/או אישיים."
        },


        {
            "id": 6,

            "name": "יחסי עבודה",

            "description": "האגף מהווה זרוע ממשלתית להכשרת כוח אדם מקצועי במטרה לסייע בצמצום פערים חברתיים ולהעלות את פריון משק התעסוקה בישראל",

            "info": "ייזום לעידוד סקרים ומחקרים אפליקטיביים בתחום יחסי העבודה לשם איתור מוקדי מתח במערכת יחסי העבודה ולשם הבנת תהליכים במערכת זו"
        },

        {
            "id": 7,

            "name": "המכון הממשלתי להכשרה טכנולוגית",

            "description": "גוף ממשלתי המופקד על הסדרת אופן הכשרתם של הנדסאים וטכנאים מוסמכים בתחומי הטכנולוגיה ובהתמחויות ייחודיות.",

            "info": "מטרות המכון הן קידום איכות ההכשרה במכללות, מתן מענה השכלתי ו/או מקצועי במקצועות טכנולוגיים, ייצוב מעמדו של ההנדסאי בחברה במשק ובתעשייה."
        },

        {
            "id": 8,

            "name": "זכויות עובדים זרים בעבודה",

            "description": "הממונה על זכויות עובדים זרים בעבודה היא רשות המתמקדת בתחום שמירת זכויותיהם בעבודה של הזרים המועסקים בישראל.",

            "info": "  סמכויות הממונה הן לפעולה בארבע מישורים עיקריים: הסברה,הסדרה,תלונות והסברה אזרחית. "
        },

        {
            "id": 9,

            "name": "בטיחות ובריאות תעסוקתית",

            "description": "מטרותיו העיקריות של המינהל הן למנוע תאונות עבודה ולשמור על בריאותם של העובדים במדינת ישראל.  ",

            "info": "תפקידי המנהל הם פיקוח ואכיפה,הסמכה ורישוי, היתרים ואישורים ועידוד פעילויות לקידום הבטיחות בעבודה. "
        },


        {
            "id": 10,

            "name": "הסדרה ואכיפת חוקי עבודה",

            "description": "מינהל הסדרה ואכיפת חוקי עבודה פועל ליישום הוראות חוקי העבודה במדינת ישראל, המהווים את התשתית החוקים של שוק העבודה. ",

            "info": "מטרות בתפקידי המנהל הם יצירה ומיסוד בסיס מעשי לשיתוף פעולה עם שותפי אכיפה פנימיים וחיצוניים, הגרת מודעות המעסיקים והעובדים להוראת חוקי העבודה שבאחריות המנהל ויישום חוקי העבודה באמצעות קיום מנגנונים."

        },

        {
            "id": 11,

            "name": "תעסוקת אוכלוסיות",

            "description": "פועל להגדלת שיעור ואיכות התעסוקה של אוכלוסיות מגוונות, על ידי שילובן וקידומן של האוכלוסיות השונות בשוק העבודה.",

            "info": "תחומי פעילויות מרכזיים: תעסוקה איכותית, תעסוקת חרדים, תעסוקת אנשים עם מוגבלויות, תעסוקת חברה ערבית דרוזית וצ׳רכסית, חדשנות מחקר והייטק, תעסוקת אוכלוסיות ייחודיות ותחום מעסיקים והכללה."
        }

    ]

}



document.addEventListener("DOMContentLoaded", function (event) {

    createItems();

    const contactButton = document.getElementById('contactButton');
    const closeButton = document.getElementById('closeButton');
    const popup = document.getElementById('popup');

    if (contactButton && closeButton && popup) {
        contactButton.addEventListener('click', function () {

            popup.querySelector('.popup-content').innerHTML = `
                <p>משרד העבודה השיק מוקד זכויות עובדים בחירום לציבור הרחב 3080*</p>
              
            `;
            popup.style.display = 'block';
        });

        closeButton.addEventListener('click', function () {
            popup.style.display = 'none';
        });
    }
});

function createItems() {
    const itemsContainer = document.getElementById('itemsContainer');

    if (itemsContainer) {
        itemsContainer.setAttribute("class", "row row-cols-1 row-cols-md-3 g-4");

        jsonData.workcategory.forEach((category, index) => {
            const colDiv = document.createElement("div");
            colDiv.setAttribute("class", "col");

            const myCard = document.createElement("div");
            myCard.setAttribute("class", "card");

            const myCardBody = document.createElement("div");
            myCardBody.setAttribute("class", "card-body");

            const myCardTitle = document.createElement("h5");
            myCardTitle.setAttribute("class", "card-title");
            myCardTitle.innerHTML = ` ${category.name}`;

            const myCardDescription = document.createElement("h9");
            myCardDescription.setAttribute("class", "card-text");
            myCardDescription.innerHTML = ` ${category.description}`;

            const myCardInfo = document.createElement("p");
            myCardInfo.setAttribute("class", "card-info");
            myCardInfo.innerHTML = `${category.info}`;

            const button = document.createElement("button");
            button.setAttribute("class", "btn cardbtn");
            button.setAttribute("info", `${category.info}`);
            button.innerHTML = "קרא עוד ";

            button.addEventListener("click", openInfo);

            myCardBody.appendChild(myCardTitle);
            myCardBody.appendChild(myCardDescription);
            myCardBody.appendChild(myCardInfo);
            myCardBody.appendChild(button);
            myCard.appendChild(myCardBody);
            colDiv.appendChild(myCard);
            itemsContainer.appendChild(colDiv);
        });

    }

    const footer = document.getElementById("footer");
    // footer.innerHTML = "משרד העבודה כאן עבורכם גם בזמן מלחמת חרבות ברזל";
    const contact = document.createElement("button");
    contact.setAttribute("class", "btn btn-primary btn-sm");
    contact.innerHTML = "צרו קשר";
    footer.appendChild(contact);

}
document.addEventListener("DOMContentLoaded", function (event) {
    const contactButton = document.getElementById('footer').querySelector('button');

    if (contactButton) {
        contactButton.addEventListener('click', function () {
            const modalContent = `
                <div class="modal" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">צור קשר</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>משרד העבודה השיק מוקד זכויות עובדים בחירום לציבור הרחב 3080*</p>
                                <!-- Add your contact form or additional information here -->
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">סגור</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            const modalContainer = document.createElement('div');
            modalContainer.innerHTML = modalContent;


            document.body.appendChild(modalContainer);

            const modal = new bootstrap.Modal(modalContainer.querySelector('.modal'));
            modal.show();
        });
    }
});


function openInfo(e) {
    const button = e.target;
    const buttonText = button.innerHTML;


    if (buttonText === "קרא עוד ") {
        button.innerHTML = "קרא פחות";
    } else {
        button.innerHTML = "קרא עוד ";
    }
    button.setAttribute("class", "btn cardbtn");
    const cardBody = button.parentElement;
    const info = cardBody.querySelector('.card-info');

    cardBody.classList.toggle('show-info');
}

document.addEventListener("DOMContentLoaded", function (event) {

    const searchButton = document.getElementById("searchButton");
    if (searchButton) {
        searchButton.addEventListener("click", function () {
            searchCards();
        });
    }


    const clearSearchButton = document.getElementById("clearSearchButton");
    if (clearSearchButton) {
        clearSearchButton.addEventListener("click", function () {
            clearSearch();
        });
    }
    function searchCards() {
        const searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
        const cardTitles = document.querySelectorAll(".card-title");
        let hasResults = false;

        cardTitles.forEach(function (title) {
            const card = title.closest(".card");
            const cardText = title.textContent.trim().toLowerCase();

            if (cardText.startsWith(searchInput)) {
                card.style.display = "block";
                hasResults = true;
            } else {
                card.style.display = "none";
            }
        });


        const noResultsMessage = document.getElementById("noResultsMessage");
        if (noResultsMessage) {
            if (!hasResults) {
                noResultsMessage.style.display = "block";
            } else {
                noResultsMessage.style.display = "none";
            }
        }
    }


    function clearSearch() {
        const searchInput = document.getElementById("searchInput");
        searchInput.value = "";
        searchCards();
    }
});

document.addEventListener("DOMContentLoaded", function (event) {
    const contactButton = document.getElementById('contactButton');
    const closeButton = document.getElementById('closeButton');
    const popup = document.getElementById('popup');

    if (contactButton && closeButton && popup) {
        contactButton.addEventListener('click', function () {

            popup.querySelector('.popup-content').innerHTML = `
                <p>משרד העבודה השיק מוקד זכויות עובדים בחירום לציבור הרחב 3080*</p>
              
            `;
            popup.style.display = 'block';
        });

        closeButton.addEventListener('click', function () {
            popup.style.display = 'none';
        });
    }
});
