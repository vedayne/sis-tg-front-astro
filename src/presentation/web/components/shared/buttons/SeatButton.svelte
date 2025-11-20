<script lang="ts">
  import { selectSeat, getMainSeat, mainSeat } from '@/presentation/web/stores/main-seat.store'
  interface Props {
    text: string
    seat: string
  }

  const { text, seat }: Props = $props()

  let mainSeatStore: string = $state('')
  mainSeat.subscribe(value => {
    mainSeatStore = value
  })

  let isSelected: boolean = $derived.by(() => mainSeatStore === seat)

  const handleClick = () => {
    selectSeat(seat)
  }

</script>

{#if isSelected}
  <button
    onclick={handleClick}
    class="px-8 py-3 bg-gold-400 text-navy-900 rounded-lg font-bold neon-border hover:shadow-lg hover:cursor-pointer transition-all"
  >
    { text }
  </button>
{:else}
  <button
    onclick={handleClick}
    class="px-8 py-3 bg-navy-800 text-white rounded-lg font-bold neon-border hover:shadow-lg hover:cursor-pointer transition-all"
  >
    { text }
  </button>
{/if}
