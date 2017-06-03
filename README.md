# :pineapple: haiticss

[![Build Status](https://travis-ci.org/haiticss/haiticss.svg?branch=master)](https://travis-ci.org/haiticss/haiticss)

Like others, [haiticss](https://haiticss.io/) is just another CSS framework to wear any project with the [ITCSS](http://itcss.io/) architecture. Mainly inspired on the excellent project [inuitcss](https://github.com/inuitcss/inuitcss) by [Harry Roberts](https://csswizardry.com/), from where we found our best suitable starting point. If you plan to compare and choose other solutions, we suggest you to check [iotaCSS](https://www.iotacss.com/) and [Nebula CSS](http://rbrtsmith.com/nebula-css/) as well.

The main idea that encouraged us to create this project, comes from the necessity to align a solid CSS architecture with a visual language and design collaboration workflow. We use it to build coherent and consistent interfaces, style guides and design systems. Works for both new projects and existing ones, no matter if you start from scratch or you inherited a legacy hell to improve or maintain. If you're looking for similar objectives, maybe you found a suitable starting point for your project.

In the end we added some layers, and a visual language into the architecture. Using it properly, should help you on building digital products right now, without complex setup neither architectural decisions. With [haiticss](https://haiticss.io/) you can easy be succeed in technical terms, but cherry on the cake comes first with design collaboration, and then spreading the language to all involved stakeholders.

Main differences from other similar frameworks are:

* Number prefixes on CSS layers, helping non familiar developers to get into the architecture hierarchy [(reconsidering to add again)](https://github.com/haiticss/haiticss/issues/54).
* Abstract content, no components provided out of the box.
* Design foundations, a visual language defined by close collaboration between developers and designers. Extensible and customizable.
* Feature toggling variables to include/exclude any feature and prevent unused CSS output.
* Objects served both as class based output and mixins as well. It lets you use the black magic on wayward conditions.
* Added a material layer with configurable base elements.
* Added an abstract animations layer.
* Added a color schemes layer.
* Scoped option built on settings and generic layers, helping to start old site migrations on the fly, respecting the legacy code, but breaking most risky inheritance.


### References

* [BEM Naming](http://getbem.com/naming/)
* [Managing CSS Projects with ITCSS](https://www.youtube.com/watch?v=1OKZOV-iLj4&feature=youtu.be)
* [BEMIT: Taking the BEM Naming Convention a Step Further](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)
* [inuitcss](https://github.com/inuitcss/inuitcss)
* [iotaCSS](https://www.iotacss.com/)
* [Nebula CSS](http://rbrtsmith.com/nebula-css/)