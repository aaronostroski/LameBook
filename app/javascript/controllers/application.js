import { Application } from "@hotwired/stimulus"

const application = Application.start()

// const targetEl = document.getElementById('defaultModal');

// const options = {
//   placement: 'bottom-right',
//   backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
//   onHide: () => {
//       console.log('modal is hidden');
//   },
//   onShow: () => {
//       console.log('modal is shown');
//   },
//   onToggle: () => {
//       console.log('modal has been toggled');
//   }
// };

// const modal = new Modal(targetEl, options);

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
        const idPost = elem.dataset.id;
        const data = new FormData();
        data.append("post_id", idPost );

        fetch("/posts_likes" , {"method": "POST", body: data})
        .then( async res => {
            if(res.ok) {
                const { response: total } = await res.json();
                changeCounter(idPost, total);
                toggleLikeButton(elem, idPost)
            }
        })
        .catch(e => console.error(e));
    })
})


const unlikeButton = document.querySelectorAll(".unlike");

unlikeButton.forEach(elem => {
    elem.addEventListener("click", ev => {
        ev.preventDefault();
        const idPost = elem.dataset.id;
        const data = new FormData();
        data.append("post_id", idPost );

        fetch(`/posts_likes/${idPost}` , {"method": "DELETE"})
        .then( async res => {
            if(res.ok) {
                const { response: total } = await res.json();
                changeCounter(idPost, total);
                toggleUnlikeButton(elem, idPost)
            }
        })
        .catch(e => console.error(e));
    })
})

application.debug = false
window.Stimulus   = application

export { application }
