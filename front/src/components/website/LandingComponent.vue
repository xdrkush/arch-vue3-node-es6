<template>
  <div class="q-pa-md text-center">
    <div>
      <h2>{{ user.name }}</h2>
      <h5>( In Progress ... )</h5>
      <p>{{ user.description }}</p>
    </div>
    <q-img :src="UnicornCircle" spinner-color="white"
      width="50vh"
     />
  </div>
</template>

<script>
import { ref } from "vue";
import UnicornCircle from "../../assets/Unicorn-circle.svg";

export default {
  name: "LandingComponents",
  props: ["data"],
  setup(props) {
    // console.log("LandingComponent", props.data);
    const user = ref(props.data);
    return { UnicornCircle, user };
  },
};
</script>
