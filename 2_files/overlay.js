google.maps.__gjsload__('overlay', function(_){var Mz=_.pa("b"),Nz=_.k(),Oz=function(){var a=this.Sf;if(this.getPanes()){if(this.getProjection()){if(!a.b&&this.onAdd)this.onAdd();a.b=!0;this.draw()}}else{if(a.b)if(this.onRemove)this.onRemove();else this.remove();a.b=!1}},Pz=function(a){a.Sf=a.Sf||new Nz;return a.Sf},Qz=function(a){_.Pf.call(this);this.da=(0,_.t)(Oz,a)};_.v(Mz,_.G);
Mz.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.Hb(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.b:null))};_.v(Qz,_.Pf);_.ge("overlay",{Qk:function(a){if(a){a.getMap();var b=a.getMap(),c=Pz(a),d=c.Um;c.Um=b;d&&(c=Pz(a),(d=c.U)&&d.unbindAll(),(d=c.oi)&&d.unbindAll(),a.unbindAll(),a.set("panes",null),a.set("projection",null),_.x(c.M,_.F.removeListener),c.M=null,c.Uc&&(c.Uc.da(),c.Uc=null),_.zn("Ox","-p",a));if(b){c=Pz(a);d=c.Uc;d||(d=c.Uc=new Qz(a));_.x(c.M||[],_.F.removeListener);var e=c.U=c.U||new _.al,f=b.__gm;e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("center",f,"projectionCenterQ");e.bindTo("projection",b);
e.bindTo("projectionTopLeft",f);e=c.oi=c.oi||new Mz(e);e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("projection",b);e.bindTo("projectionTopLeft",f);a.bindTo("projection",e,"outProjection");a.bindTo("panes",f);e=(0,_.t)(d.P,d);c.M=[_.F.addListener(a,"panes_changed",e),_.F.addListener(f,"zoom_changed",e),_.F.addListener(f,"offset_changed",e),_.F.addListener(b,"projection_changed",e),_.F.addListener(f,"projectioncenterq_changed",e),_.F.forward(b,"forceredraw",d)];d.P();b instanceof _.Rd&&(_.wn(b,
"Ox"),_.yn("Ox","-p",a,!!b.Z))}}}});});
