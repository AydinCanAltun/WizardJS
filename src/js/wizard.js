/**
 data: {
    contents: [
        {
            selector: string,
            title: string
            content: string,
            position: <top>(default) | <top-left> | <top-right> | <bottom> | <bottom-left> | <bottom-right>
        }
    ]
 }
 
 */

class Wizard
{
    constructor(data)
    {
        if(data === null || data === undefined || typeof(data) !== "object")
        {
            return ;
        }

        if(data.contents === null || data.contents === undefined || typeof(data.contents) !== "object")
        {
            return ;
        }

        var contents = data.contents;
        
        this.contents = contents;
        this.activeWizard = 0;

    }

    start()
    {
        this.draw(0);
        this.activeWizard = 0;
    }

    draw(index)
    {
        console.log("Index: " + index);
        var item = this.contents[index];
        var wizard = this;
        var modal = document.createElement("div");
        modal.classList = "wizard-container";

        modal.style.top = "-1000px";
        modal.style.left = "-1000px";

        var element = document.querySelector(item.selector);
        var rect = element.getBoundingClientRect();

        var titleDiv = document.createElement("div");
        titleDiv.classList = "title";
        titleDiv.innerHTML = item.title;

        modal.appendChild(titleDiv);

        var contentDiv = document.createElement("div");
        contentDiv.classList = "content";
        contentDiv.innerHTML = item.content;

        modal.appendChild(contentDiv);

        var buttons = document.createElement("div");
        buttons.classList = "buttons";

        if(index - 1 >= 0)
        {
            var prev = document.createElement("button");
            prev.classList = "button";
            prev.setAttribute("role", "button");
            prev.innerText = "Previous";
            prev.addEventListener("click", function(e){
                e.preventDefault();
                modal.remove();
                wizard.prev();
            });
            buttons.appendChild(prev);
        }

        if(index + 1 < this.contents.length)
        {
            var next = document.createElement("button");
            next.classList = "button";
            next.setAttribute("role", "button");
            next.innerText = "Next";
            next.addEventListener("click", function(e){
                e.preventDefault();
                modal.remove();
                wizard.next();
            });
            buttons.appendChild(next);

        }else
        {
            var finish = document.createElement("button");
            finish.classList = "button";
            finish.setAttribute("role", "button");
            finish.innerText = "Finish";
            finish.addEventListener("click", function(e){
                e.preventDefault();
                modal.remove();
            });
            buttons.appendChild(finish);
        }

        
        modal.appendChild(buttons);

        document.body.appendChild(modal);
        
        if(item.position === "top-left")
        {
            var top = rect.top - modal.offsetHeight - 10;
            var left = rect.left - modal.offsetWidth - 10;
            
            if(top < 0)
            {
                top = 0;
            }

            if(left < 0)
            {
                left = 0;
            }
            modal.style.top = top + "px";
            modal.style.left = left + "px";

        }else if(item.position === "top-right")
        {
            var top = rect.top - modal.offsetHeight - 10;
            var left = rect.right + 10;

            if(top < 0)
            {
                top = 0;
            }

            if(left > document.body.offsetWidth)
            {
                left = rect.right;
            }
            modal.style.top = top + "px";
            modal.style.left = left + "px";



        }else if(item.position === "bottom")
        {
            var top = rect.bottom + 10;
            var left = rect.left;
            
            if(top > document.body.offsetHeight)
            {
                top = rect.bottom;
            }
            modal.style.top = top + "px";
            modal.style.left = left + "px";

        }else if(item.position === "bottom-left")
        {
            var top = rect.bottom + 10;
            var left = rect.right - modal.offsetWidth - 10;

            if(top > document.body.offsetHeight)
            {
                top = rect.bottom;
            }

            if(left > document.body.offsetWidth)
            {
                left = rect.right;
            }
            modal.style.top = top + "px";
            modal.style.left = left + "px";

        }else if(item.position === "bottom-right")
        {
            var top = rect.bottom + 10;
            var left = rect.right + 10;

            if(top > document.body.offsetHeight)
            {
                top = rect.bottom;
            }
            if(left > document.body.offsetWidth)
            {
                left = rect.right;
            }

            modal.style.top = top + "px";
            modal.style.left = left + "px";

        }else
        {
            var top = rect.top - modal.offsetHeight - 10;
            var left = rect.left;
            if(top < 0)
            {
                top = 0;
            }
            modal.style.top = top + "px";
            modal.style.left = left + "px";
        }



    }

    next()
    {
        var active = this.activeWizard + 1;

        if(active < this.contents.length)
        {
            this.activeWizard = active;
            this.draw(active);
        }

    }

    prev()
    {
        var active = this.activeWizard - 1;

        if(active > 0)
        {
            this.activeWizard = active;
            this.draw(active);
        }

    }


}