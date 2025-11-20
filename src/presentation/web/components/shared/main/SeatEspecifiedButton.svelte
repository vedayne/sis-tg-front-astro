<script lang="ts">
  import { mainSeatEspecified, mainSeat, selectSeatEspecified } from '@/presentation/web/stores/main-seat.store'

  let mainSeatStore: string = $state('')
  mainSeat.subscribe(value => {
    mainSeatStore = value
    if (value === 'La Paz') {
        selectSeatEspecified('La Paz-Central')
    } else if (value === 'Cochabamba') {
        selectSeatEspecified('Cochabamba-Lanza')
    } else {
        selectSeatEspecified( value )
    }
  })

  let isMultiseat: boolean = $derived.by(() => mainSeatStore === 'La Paz' || mainSeatStore === 'Cochabamba')

  let mainSeatEspecifiedStore: string = $state('')
  mainSeatEspecified.subscribe(value => {
    mainSeatEspecifiedStore = value
  })

  const optionsDepartmentLaPaz: string[] = [
    'La Paz-Irpavi',
    'La Paz-Central',
    'La Paz-Alto Irpavi'
  ]

  const optionsDepartmentCochabamba: string[] = [
    'Cochabamba-Lanza',
    'Cochabamba-Muyurina',
  ]

  const options = $derived.by(() => {
    if (mainSeatStore === 'La Paz') {
      return optionsDepartmentLaPaz
    } else if (mainSeatStore === 'Cochabamba') {
      return optionsDepartmentCochabamba
    } else {
      return []
    }
  })

</script>

{#if isMultiseat}
<div class="flex justify-center w-full mx-auto gap-4 my-5">

  {#each options as option}
    {#if option === mainSeatEspecifiedStore}
      <button
        onclick={() => selectSeatEspecified(option)}
        class="px-8 py-3 bg-gold-400 text-navy-900 rounded-lg font-bold neon-border hover:shadow-lg hover:cursor-pointer transition-all"
      >
        Repartición { option.split('-')[1] }
      </button>
    {:else}
      <button
        onclick={() => selectSeatEspecified(option)}
        class="px-8 py-3 bg-navy-800 text-white rounded-lg font-bold neon-border hover:shadow-lg hover:cursor-pointer transition-all"
      >
        Repartición { option.split('-')[1] }
      </button>
    {/if}
  {/each}
</div>
{/if}