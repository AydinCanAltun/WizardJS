class Wizard
{
    constructor(contents)
    {
        this.contents = contents;
        this.activeWizard = 0;
    }

    create()
    {
        var item = this.contents[0];
        this.draw(item, 0);
        this.activeWizard = 0;
        document.body.style.overflow = "none";
    }

    draw(item, index)
    {
        var wizard = this;
        var modal = document.createElement("div");
        modal.classList = "wizard-modal";

        var element = document.querySelector(item.selector);
        var rect = element.getBoundingClientRect();
        
        modal.style.top = "-1000px";
        modal.style.left = "-1000px";

        var content = document.createElement("div");
        content.classList = "wizard-content";
        content.innerHTML = item.content;

        modal.appendChild(content);
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        var highlighter = document.createElement("div");
        highlighter.classList = "wizard-highlighter";
        highlighter.style.position = "absolute";
        highlighter.style.width = width + "px";
        highlighter.style.height = height + "px";
        highlighter.style.background = "transparent";
        highlighter.style.border = "1px solid red";
        highlighter.style.top = rect.top + "px";
        highlighter.style.left = rect.left + "px";
        highlighter.style.zIndex = "10000";


        if(index===0)
        {
            
            var nextButton = document.createElement("button");
            nextButton.classList = "btn btn-right";
            nextButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
            </svg>`;
            
            nextButton.addEventListener("click", function(e) {
                e.preventDefault();
                wizard.next();
            });

            modal.appendChild(nextButton);
            

        }else if(index === this.contents.length - 1)
        {
            var prevButton = document.createElement("button");
            prevButton.classList = "btn btn-left";
            prevButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg>`;
            prevButton.addEventListener("click", function(e) {
                e.preventDefault();
                wizard.prev();
            });

            var finishButton = document.createElement("button");
            finishButton.classList = "btn btn-right";
            finishButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-check-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
            </svg>`;
            
            finishButton.addEventListener("click", function(e) {
                e.preventDefault();
                wizard.finish();
            });

            modal.appendChild(prevButton);
            modal.appendChild(finishButton);
           
        }else
        {
            var prevButton = document.createElement("button");
            prevButton.classList = "btn btn-left";
            prevButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg>`;
            
            prevButton.addEventListener("click", function(e) {
                e.preventDefault();
                wizard.prev();
            });

            var nextButton = document.createElement("button");
            nextButton.classList = "btn btn-right";
            nextButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
            </svg>`;
            
            nextButton.addEventListener("click", function(e) {
                e.preventDefault();
                wizard.next();
            });

            modal.appendChild(prevButton);
            modal.appendChild(nextButton);

            
            
        }
        
        document.body.appendChild(modal);
        
        var top = rect.top - modal.offsetHeight - 10;
        var left = rect.left;

        if(top < 0)
        {
            top = 0;
        }

        modal.style.top = top + "px";
        modal.style.left = left + "px";

        document.body.appendChild(highlighter);


        

    }

    next()
    {
        document.querySelector(".wizard-modal").remove();
        document.querySelector(".wizard-highlighter").remove();
        var item;
        var index;
        var active = this.activeWizard;

        index = active + 1;
        item = this.contents[active + 1];

        this.draw(item, index); 
        this.activeWizard = this.activeWizard + 1;
    }

    prev()
    {
        document.querySelector(".wizard-modal").remove();
        document.querySelector(".wizard-highlighter").remove();
        var item;
        var index;
        var active = this.activeWizard;

        index = active - 1;
        item = this.contents[active - 1];

        this.draw(item, index);
        this.activeWizard = this.activeWizard - 1;
    }

    finish()
    {
        document.querySelector(".wizard-modal").remove();
        document.querySelector(".wizard-highlighter").remove();
        this.activeWizard = 0;
        document.body.overflow = "unset";
    }

}