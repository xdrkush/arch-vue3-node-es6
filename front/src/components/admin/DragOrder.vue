<template>
  <div>
    <div class="row no-wrap justify-around q-pt-md">
      <!-- List Section -->
      <q-list
        bordered
        class="rounded-borders"
        style="width: 100%"
        @dragenter="onDragEnter"
        @dragleave="onDragLeave"
        @dragover="onDragOver"
        @drop="onDrop"
      >
        <q-expansion-item
          expand-separator
          :key="index"
          v-for="(section, index) in parent.sections"
          style="width: 100%"
        >
          <template v-slot:header>
            <q-item-section
              avatar
              :id="'dragEl-' + index"
              :draggable="true"
              @dragstart="(e) => onDragStart(e, section, index)"
            >
              <q-avatar
                icon="drag_indicator"
                color="primary"
                text-color="white"
              />
            </q-item-section>

            <q-item-section> {{ section.name }} </q-item-section>

          </template>

          <q-card>
            <q-card-section>
              <DynamicComponent :data="section" />
              <FormEdit
                :btnSave="true"
                :data="section"
                :pageofsection="page"
                :section="true"
                :editFn="monitStore.editSection"
                :delete="true"
                :deleteFn="monitStore.deleteSectionToPage"
              />
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { arraymove } from "../../utils";
import { useMonitStore } from "../../stores/monit.store";
import DynamicComponent from "../website/DynamicComponent.vue";
import FormEdit from "components/admin/FormEdit.vue";

export default {
  components: {
    DynamicComponent,
    FormEdit,
  },
  props: {
    page: Object,
  },
  setup(props) {
    const parent = ref(props.page);
    const monitStore = useMonitStore();

    // console.log("DragOrder", parent.value);

    return {
      props,
      parent,
      monitStore,

      // store the id of the draggable element
      onDragStart(e, item, index) {
        console.log("dragStart", item, index);
        e.dataTransfer.setData("text", e.target.id);
        e.dataTransfer.dropEffect = "move";
      },

      onDragEnter(e) {
        console.log("dragEnter", e.target);
        // don't drop on other draggables
        if (e.target.draggable !== true) {
          e.target.classList.add("drag-enter");
        }
      },

      onDragLeave(e) {
        console.log("onDragLeave", e.target);
        e.target.classList.remove("drag-enter");
      },

      onDragOver(e) {
        // console.log("onDragOver");
        e.preventDefault();
      },

      onDrop(e) {
        console.log("onDrop", e.target);
        // Selected Parent match with draggedEl
        let target = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        e.preventDefault();

        // Item selected
        const draggedId = e.dataTransfer.getData("text");
        const draggedEl = document.getElementById(draggedId);

        arraymove(
          parent.value.sections,
          Number(draggedEl.id.split("-")[1]),
          Number(target.id.split("-")[1])
        );

        // Array section is edit on parent (props.page)
        monitStore.editOrderSectionPage(props.page);
      },
    };
  },
};
</script>
