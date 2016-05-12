import { HandoffService } from 'ember-handoff';
import inject from 'ember-service/inject';

export default HandoffService.extend({
  //headData: inject(),
  setPageTitle(title) {
    // @TODO: work out how to get the headData service working (I think this is a different, non-ember-handoff addon...
    console.log('running through set page title');
    //this.set('headData.title', title);
  }
});
