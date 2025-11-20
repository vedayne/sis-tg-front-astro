<script lang="ts">
  import { mainSeatEspecified } from '@/presentation/web/stores/main-seat.store'

  let mainSeatEspecifiedStore: string = $state('')
  mainSeatEspecified.subscribe(value => {
    mainSeatEspecifiedStore = value
  })
  const embedsUrls: Record<string, string> = {
    'Cochabamba-Lanza': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.586100519572!2d-66.15954188552429!3d-17.383638418671957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e3740ee58e3411%3A0xf66ea3b67561c448!2sEscuela%20Militar%20De%20Ingenier%C3%ADa!5e0!3m2!1ses-419!2sbo!4v1630616793551!5m2!1ses-419!2sbo',
    'Cochabamba-Muyurina': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1346.2199137952214!2d-66.14733120880813!3d-17.378887962383587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e37404a8f5dc31%3A0x20561bb4ae20a1e3!2sEscuela%20Militar%20De%20Ingenier%C3%ADa!5e0!3m2!1ses-419!2sbo!4v1630617099718!5m2!1ses-419!2sbo',
    'La Paz-Irpavi': 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15299.302567448838!2d-68.0868217!3d-16.5348978!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a399dfb88c485d6!2sEscuela%20Militar%20de%20Ingenier%C3%ADa%20Irpavi!5e0!3m2!1ses-419!2sbo!4v1602100536820!5m2!1ses-419!2sbo',
    'La Paz-Alto Irpavi': 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9097.29353291977!2d-68.08879081546694!3d-16.529088092406433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d8f5de9639909e9!2sEscuela%20Militar%20de%20Ingenier%C3%ADa%20EMI%20ALTO%20IRPAVI!5e0!3m2!1ses-419!2sbo!4v1630437236488!5m2!1ses-419!2sbo',
    'La Paz-Central': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.2926037162197!2d-68.12494398513573!3d-16.51131918860905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2061cec91d61%3A0xd6b22008c3e21e16!2sEscuela%20Militar%20de%20Ingenier%C3%ADa!5e0!3m2!1ses-419!2sbo!4v1630680192456!5m2!1ses-419!2sbo',
    'Santa Cruz': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.571238975043!2d-63.181029885515635!3d-17.811836880537417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e849f01967a3%3A0x6e9f1abefd308f21!2sEMI%20Unidad%20Academica%20Santa%20Cruz!5e0!3m2!1ses-419!2sbo!4v1630617330086!5m2!1ses-419!2sbo',
    'Riberalta': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5764988753335!2d-66.07611178563326!3d-10.995304326223362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93d41c9459cef1f3%3A0xa4a9de78451a9471!2sEscuela%20Militar%20de%20Ingenieria%20EMI!5e0!3m2!1ses-419!2sbo!4v1630617631789!5m2!1ses-419!2sbo',
    'Tropico': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d974678.8179321924!2d-64.779622099193!3d-17.39550517501707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e44f47d84c0c1f%3A0x77aafd12ba7fa6ac!2sEMI%20Unidad%20Acad%C3%A9mica%20del%20Tropico!5e0!3m2!1ses-419!2sbo!4v1630617521332!5m2!1ses-419!2sbo'
  }

  const embedUrlSelected = $derived.by(() => embedsUrls[mainSeatEspecifiedStore])
  
</script>

<iframe
  src={embedUrlSelected}
  frameborder="border:0;"
  allowfullscreen={true}
  style="border: 0px; width: 100%; height: 350px;"
  title="Mapa EMI"
></iframe>