<template>
  <!-- Yeah, I know vuetify has a hover component, this is easier. -->
  <v-card
    :class="`elevation-${hover? 10: 1}`"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <v-card-title>{{challenge.title}}</v-card-title>
    <div>
      <v-chip
        v-for="tag in (challenge.tags.concat([challenge.crn]))"
        v-bind:key="tag"
        v-on:click="query=tag"
      >{{tag}}</v-chip>
    </div>
    <v-card-text>{{challenge.shortDescription}}</v-card-text>
    <v-card-actions>
      <v-btn
        text
        class="text-btn"
        :to="{ name: 'Challenge', params: { id: this.challenge.id } }"
      >Try It!</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Store from "../store";
export default {
  data: () => {
    return { hover: false };
  },
  props: {
    challenge: Object,
  },
  computed: {
    query: {
      get() {
        return Store.state.searchQuery;
      },
      set(val) {
        Store.commit("updateSearchQuery", val);
      },
    },
  },
};
</script>

<style scoped>
.v-card {
  width: 320px;
  margin: 4px;
  margin-top: 25px;
  display: inline-block;
  vertical-align: top;
  border-radius: 10px;
  cursor: default;
}
.v-chip {
  cursor: pointer;
  user-select: none;
  margin: 2.5px;
}
</style>