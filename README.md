# :pineapple: haiticss

Just another baseline perspective to wear any project with the [ITCSS](http://itcss.io/) architecture. Mainly based on the excellent project [inuitcss](https://github.com/inuitcss/inuitcss) by [Harry Roberts](https://csswizardry.com/), from where I found my best suitable starting point.

The idea to create this project, comes from the necessity to adding some modifications and missing features on INUIT that probably will not fit into the original project roadmap.

The input of this mutation comes from my experience applying this architecture on many projects, some new, some not.

Main differences from [inuitcss](https://github.com/inuitcss/inuitcss) are:

* Number prefixes on CSS layers, helping non familiar developers to get into the architecture hierarchy.
* Namespaced variables to improve compatibility when importing into an existent project.
* Scoped version of generic layer, helping to start old site migrations on the fly, respecting the legacy code, but breaking most risky inheritance.
* Feature toggling variables to include/exclude any object or utility.
* Extended objects and utilities configuration variables to toggle and configure some modifiers groups and unused CSS output.



### References

* [BEM Naming](http://getbem.com/naming/)
* [Managing CSS Projects with ITCSS](https://www.youtube.com/watch?v=1OKZOV-iLj4&feature=youtu.be)
* [BEMIT: Taking the BEM Naming Convention a Step Further](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)
* [INUIT CSS](https://github.com/inuitcss/inuitcss)