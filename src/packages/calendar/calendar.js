const GatheringCard = require("./GatheringCard.svelte")
const GatheringView = require("./GatheringView.svelte")
const TimelineView = require("./TimelineView.svelte");
const ExportView = require("./ExportView.svelte");
const GatheringActionCard = require("./GatheringActionCard.svelte");
const { isGathering, isUpdate, isAttendee } = require("ssb-gathering-schema") 

patchfox.package({
    name: "calendar",
    messageTypes: [
        {
            type: "gathering",
            card: GatheringCard
        },
        {
          type: "about",
          card: GatheringActionCard,
          validator: msg => {
            console.log(msg)
            console.log(isUpdate(msg))
            return isUpdate(msg)
        }
      }
    ],
    gathering: GatheringView,
    timeline: TimelineView,
    export: ExportView,
    menu: {
        group: "Calendar",
        label: "Gatherings",
        items: [
          {
            label: "Future Events",
            event: "package:go",
            data: {
              pkg: "calendar",
              view: "timeline"
            }
          }
        ]
      }
})
