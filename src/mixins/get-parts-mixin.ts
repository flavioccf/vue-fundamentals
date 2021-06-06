import { Part } from "@/interfaces/index";
import { Component, Vue } from 'vue-property-decorator';

@Component({
  beforeCreate() {
    this.$store.dispatch("getParts");
    console.log("im working");
  },
  computed: {
    availableParts(): Part[] {
      return this.$store.state.parts;
    },
  },
})
export default class GetPartsMixin extends Vue {

};
