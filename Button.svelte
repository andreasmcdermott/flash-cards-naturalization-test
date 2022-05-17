<style>
  button {
    font-size: 1rem;
    padding: 0.75rem 2.5rem calc(0.75rem + 2px);
    border: none;
    border-radius: 5px;
    background: hotpink;
    box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.25);
    color: white;
    font-weight: bold;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.33);
    display: inline-flex;
    align-items: baseline;
  }

  button.square {
    padding: 0.75rem 1rem calc(0.75rem + 2px);
  }
</style>

<script>
export let square = false;
</script>

<button class:square on:click><slot /></button>