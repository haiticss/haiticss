# Stateful naming convention

Use it on attributes or class names, set & unset them using JS, but please, use the given names for each purpose and document them here.

### Movement

By default, if no stateful class is defined, the default state of the movement should be the off-screen waiting for a trigger to start.

#### in
Set: Starts the animation to the on-screen state
Unset: Rollback the animation to the off-screen state

#### out
Set: Starts the animation to the off-screen state
Unset: Rollback the animation to the on-screen state


