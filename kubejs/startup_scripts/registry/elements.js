let registerGTCEuElement = (/** @type {Registry.Element} */ event) => {
  event.create("weapons_grade_naquadah").protons(174).neutrons(351).symbol("Nq+-351").halfLifeSeconds(140).isIsotope(true)

  event.create("hypogen").protons(183).neutrons(426).halfLifeSeconds(80).symbol("Hy").isIsotope(false)
  event.create("hypogen_422").protons(183).neutrons(422).halfLifeSeconds(80).symbol("Hy-422").isIsotope(true)
  event.create("hypogen_414").protons(183).neutrons(414).halfLifeSeconds(80).symbol("Hy-414").isIsotope(true)
  event.create("hypogen_403").protons(183).neutrons(403).halfLifeSeconds(80).symbol("Hy-403").isIsotope(true)

  event.create("time").protons(183).neutrons(403).halfLifeSeconds(-1).symbol("Tim").isIsotope(false)
  event.create("infinity_matter").protons(1000).neutrons(1000).halfLifeSeconds(-1).symbol("Inf").isIsotope(false)

  event.create("allthemodium").protons(127).neutrons(201).halfLifeSeconds(-1).symbol( "Atm").isIsotope(false)
  event.create("unobtainium").protons(128).neutrons(206).halfLifeSeconds(-1).symbol("Un").isIsotope(false)

  event.create("certus").protons(14).neutrons(18).halfLifeSeconds(-1).symbol("Ct").isIsotope(false)
}
