<style>
  @keyframes flip {
    from {
      transform: rotateY(0);
    }

    to {
      transform: rotateY(-180deg);
    }
  }

  .card {
    width: 80%;
    height: 80%;
    max-height: 550px;
    max-width: 600px;
    position: relative;
    margin: 0 auto;
  }

  article {
    width: 100%;
    height: 100%;
    padding: 2.5rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    transition: transform 550ms ease-in-out;
    border-radius: 12px;
    background: white;
    transform-origin: center center;
  }

  article.back {
    border: 4px solid pink;
  }

  .shadow {
    background: #ddd;
    width: 100%;
    height: calc(100% + 2px);
    position: absolute;
    border-radius: 12px;
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.33); */
    transition: transform 450ms linear;
  }

  .shadow.front {
    transform: scaleX(1);
  }

  .flipped .shadow.front {
    transform: scaleX(0.1);
  }

  .shadow.back {
    transform: scaleX(0.1);
  }

  .flipped .shadow.back {
    transform: scaleX(1);
  }

  .flipped article.front {
    transform: rotateY(180deg);
  }

  article.back {
    transform: rotateY(180deg);
  }

  .flipped article.back {
    transform: rotateY(0);
  }

  .index {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(0, -100%);
    font-size: 0.66rem;
    font-weight: bold;
    opacity: 0.66;
  }

  .question {
    padding: 0;
    margin: 2rem 0;
    text-align: center;
    line-height: 1.25;
    font-size: 2rem;
    color: #333;
    position: relative;
  }

  .answer {
    padding: 0;
    margin: 0;
  }

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: auto;
    opacity: 0.66;
    font-size: 0.7rem;
    line-height: 1.25;
    font-family: sans-serif;
  }

  .category {
    font-weight: bold;
  }

  footer {
    margin-top: auto;
  }
</style>

<script>
  import { createEventDispatcher, beforeUpdate } from "svelte";
  import Button from "./Button.svelte";
  import { fly } from "svelte/transition";

  export let question;
  export let flipped;

  const dispatch = createEventDispatcher();

  const flip = () => {
    dispatch("flip");
  };

  const skip = () => {
    dispatch("next-question", { correct: null });
  };

  const correct = () => {
    dispatch("next-question", { correct: true });
  };

  const incorrect = () => {
    dispatch("next-question", { correct: false });
  };
</script>

<div class="card" class:flipped transition:fly={{x: 100}}>
  <div class="shadow front" />
  <div class="shadow back" />
  
  <article class="front">
    <header>  
      <span class="category">{question.category}</span>
      <span class="subcategory">{question.subcategory}</span>
    </header>
    <h2 class="question">
      <span class="index">{question.index}.</span>{question.text}
    </h2>
    <footer>
      <Button on:click={flip}>Show Answer</Button>
      <Button square on:click={skip}>&gt;</Button>
    </footer> 
  </article>

  <article class="back">
    <header>  
      <span class="category">{question.category}</span>
      <span class="subcategory">{question.subcategory}</span>
    </header>
    <ul class="answer">
      {#each question.answers as answer}
      <li>{answer}</li>
      {/each}
    </ul>
    <footer>
      <Button on:click={correct}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
          <path fill="currentColor" d="M13.5 2l-7.5 7.5-3.5-3.5-2.5 2.5 6 6 10-10z" />
        </svg>
      </Button>
      <Button on:click={incorrect}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
          <path fill="currentColor" d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path>
        </svg>
      </Button>
    </footer> 
  </article>
</div>