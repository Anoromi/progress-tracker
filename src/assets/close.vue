<template>
  <svg
    v-bind:width="width"
    v-bind:height="height"
    version="1.1"
    viewBox="0 0 7.9375 7.9375"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title v-if="title">{{ title }}</title>
    <g transform="translate(-1.3254 -1.4884)">
      <path
        transform="matrix(1.3972 0 0 1.3972 -.52645 -.59121)"
        d="m4.1659 3.5828c-0.034106 0.00103-0.86652-0.87989-0.86652-0.87989s-1.0414-1.1194-1.3117-1.1662c-0.27021-0.046813-0.42748 0.10614-0.46766 0.14634-0.040198 0.040184-0.19315 0.19746-0.14634 0.46766 0.046813 0.27021 1.1662 1.3117 1.1662 1.3117s0.88092 0.83241 0.87989 0.86652c0.00103 0.034107-0.87989 0.86652-0.87989 0.86652s-1.1194 1.0414-1.1662 1.3117c-0.046813 0.27021 0.10614 0.42748 0.14634 0.46766 0.040184 0.040198 0.19746 0.19315 0.46766 0.14634 0.27021-0.046813 1.3117-1.1662 1.3117-1.1662s0.83241-0.88092 0.86652-0.87989m0-1.4922c0.034106 0.00103 0.86652-0.87989 0.86652-0.87989s1.0414-1.1194 1.3117-1.1662c0.27021-0.046813 0.42748 0.10614 0.46766 0.14634 0.040198 0.040184 0.19315 0.19746 0.14634 0.46766-0.046813 0.27021-1.1662 1.3117-1.1662 1.3117s-0.88092 0.83241-0.87989 0.86652c-0.00103 0.034107 0.87989 0.86652 0.87989 0.86652s1.1194 1.0414 1.1662 1.3117c0.046813 0.27021-0.10614 0.42748-0.14634 0.46766-0.040184 0.040198-0.19746 0.19315-0.46766 0.14634-0.27021-0.046813-1.3117-1.1662-1.3117-1.1662s-0.83241-0.88092-0.86652-0.87989"
        class="close-icon"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { Options, Vue, prop } from "vue-class-component";

class Props {
  title: string | undefined = prop({ required: false });
  desiredWidth?: string = prop({ required: false });
  desiredHeight?: string = prop({ required: false });
}

@Options({})
export default class CloseSVG extends Vue.with(Props) {
  get width(): string {
    return this.desiredWidth ? this.desiredWidth : "30px";
  }

  get height(): string {
    return this.desiredHeight ? this.desiredHeight : "30px";
  }
}
</script>

<style>
.close-icon {
  fill-rule: evenodd;
  fill: #44d6cf;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
