<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { getQuestions } from "./questions";
  import FlashCard from "./FlashCard.svelte";
  import Button from "./Button.svelte";
  let queue = [];
  let show = false;
  let stats = { correct: 0, incorrect: 0, skipped: 0, total: 0 };

  onMount(() => {
    restart();
  });

  let flipped = false;

  const flip = () => {
    flipped = !flipped;
  };

  const next = ({ detail: { correct } }) => {
    if (correct) stats.correct++;
    if (correct === false) stats.incorrect++;
    if (correct === null) stats.skipped++;
    flipped = false;
    show = false;
    queue.shift();
    setTimeout(() => {
      show = true;
    }, 500);
  };

  const restart = () => {
    const questions = getQuestions();
    stats = { correct: 0, incorrect: 0, skipped: 0, total: questions.length };
    show = false;
    flipped = false;
    queue = questions.sort(() => (Math.random() < 0.5 ? -1 : 1));

    setTimeout(() => {
      show = true;
    }, 250);
  };

  $: progress =
    ((stats.correct + stats.incorrect + stats.skipped) / stats.total) * 100;
</script>

<style>
  :global(html, body) {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }

  :global(*) {
    box-sizing: border-box;
  }

  main {
    background: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    perspective: 500px;
    perspective-origin: 50% 50%;
  }

  .done {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .done > * + * {
    margin-top: 1rem;
  }

  small {
    position: fixed;
    top: 100%;
    left: 0%;
    transform: translate(1rem, calc(-100% - 1rem));
    font-size: 10px;
  }
</style>

<main>
{#if queue.length && show}
  <FlashCard question={queue[0]} {flipped} on:next-question={next} on:flip={flip} />
{:else if !queue.length}
  <div class="done" in:fade>
    <strong>Done!</strong>
    <p>
      <strong>Correct Answers:</strong> {stats.correct}<br />
      <strong>Incorrect Answers:</strong> {stats.incorrect}<br />
      <strong>Skipped Answers:</strong> {stats.skipped}
    </p>
    <Button on:click={restart}>Restart</Button>
  </div>
{/if}
</main>

{#if queue.length}
<small>Progress: {Math.round(progress)}%</small>
{/if}