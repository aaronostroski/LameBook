import { Application } from "@hotwired/stimulus"

const application = Application.start()

const toggleLikeButton = (elem, id) => {
    elem.classList.toggle("hidden");
    const unlikeButton = document.querySelector(`[data-id='${id}'].unlike`);
    unlikeButton.classList.toggle("hidden");
}

const toggleUnlikeButton = (elem, id) => {
    elem.classList.toggle("hidden");
    const likeButton = document.querySelector(`[data-id='${id}'].like`);
    likeButton.classList.toggle("hidden");
}

const changeCounter = (id, total) => {
    const counter = document.querySelector(`[data-id='${id}'].total`);
    counter.textContent = total;
}


const likeButton = document.querySelectorAll(".like");

likeButton.forEach(elem => {
    elem.addEventListener("click", ev => {
        ev.preventDefault();
        const { id } = elem.dataset;
        const data = new FormData();
        data.append("post_id", id );

        fetch("/posts_likes" , {"method": "POST", body: data})
        .then( async res => {
            if(res.ok) {
                const { response: total } = await res.json();
                changeCounter(id, total);
                toggleLikeButton(elem, id)
            }
        })
        .catch(e => console.error(e));
    })
})


const unlikeButton = document.querySelectorAll(".unlike");

unlikeButton.forEach(elem => {
    elem.addEventListener("click", ev => {
        ev.preventDefault();
        const { id } = elem.dataset;
        const data = new FormData();
        data.append("post_id", id );

        fetch(`/posts_likes/${id}` , {"method": "DELETE"})
        .then( async res => {
            if(res.ok) {
                const { response: total } = await res.json();
                changeCounter(id, total);
                toggleUnlikeButton(elem, id)
            }
        })
        .catch(e => console.error(e));
    })
})

application.debug = false
window.Stimulus   = application

export { application }
