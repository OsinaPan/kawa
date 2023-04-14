const templates = {
  products: 
    `{{#each products}}
        <div class="product col-10 col-md-8 col-lg-6 col-xl-11 col-xxl-9 my-4 {{#if (isEven this.id)}}even flex-xl-row-reverse flex-column{{else}}flex-column flex-xl-row{{/if}}">
            <div class="info col-lg-12 col-xl-6 px-xl-5 py-xl-0 px-0 py-5">
                <span class="title">0{{this.id}}. {{this.name}}</span>
                <div class="description">
                    <hr>
                    <p>{{this.description}}</p>
                </div>
                <div class="ratings col-6">
                    <span><span class="type">ROASTING:&nbsp;</span> <span class="rating">{{this.roasting}}/10</span></span>
                    <span><span class="type">INTENSITY:&nbsp;</span> <span class="rating">{{this.intensity}}/10</span></span>
                </div>
                {{#if this.most_popular}}
                    <div id="most-popular" class="col-6">
                        <img src="../images/most_popular.png" alt="image for most popualar coffee"/>
                    </div>
                {{/if}}
            </div>
            <div class="image col-lg-12 col-xl-6">
                <img src="../images/coffee-{{this.id}}.png" alt="image for coffe {{this.id}}"/>
                <div class="price-container">
                    <span class="old-price">{{this.old_price}}$</span>
                    <span class="actual-price">{{this.actual_price}}$</span>
                </div>
            </div>
        </div>
    {{/each}}`,
  contact: 
    `<form action="#">
        <div class="input">
            <label for="name">NAME</label>
            <input type="text" name="name">
        </div>
        <div class="input">
            <label for="title">TITLE</label>
            <input type="text" name="title">
        </div>
        <div class="input">
            <label for="message">MESSAGE</label>
            <textarea name="message" cols="30" rows="4"></textarea>
        </div>
        <div class="input">
            <input type="submit" value="SUBMIT">
        </div>
    </form>`
};

export {
  templates
};