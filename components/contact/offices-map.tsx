"use client"

import { motion } from "framer-motion"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const offices = [
  {
    name: "Halifax",
    country: "Canada",
    flag: "🇨🇦",
    initials: "CA",
    address: "299 Gary Martin Dr, Bedford, NS",
    mapCoords: [-63.7, 44.72] as [number, number],
  },
  {
    name: "Lahore",
    country: "Pakistan",
    flag: "🇵🇰",
    initials: "PK",
    address: "Lahore, Punjab, Pakistan",
    mapCoords: [74.35, 31.52] as [number, number],
  },
  {
    name: "Kuwait City",
    country: "Kuwait",
    flag: "🇰🇼",
    initials: "KW",
    address: "Kuwait City, Kuwait",
    mapCoords: [47.97, 29.37] as [number, number],
  },
]

export function OfficesMap() {
  return (
    <section className="py-24 bg-gradient-to-b from-card/50 to-background overflow-hidden border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] bg-primary/10 text-primary mb-6"
          >
            🌍 Global Presence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-foreground mb-6 tracking-tight"
          >
            Digital Innovation, <br />
            <span className="text-primary">Global</span> Footprint.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg sm:text-xl max-w-2xl mx-auto font-medium"
          >
            Strategically located to bridge the gap between imagination and execution, anywhere on the planet.
          </motion.p>
        </div>

        {/* Flat Map View */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative min-h-[400px] sm:min-h-[500px] flex items-center justify-center -mt-8"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-video bg-primary/5 blur-[100px] rounded-full -z-10" />

          <ComposableMap
            projection="geoNaturalEarth1"
            projectionConfig={{
              scale: 180,
              center: [20, 10]
            }}
            className="w-full h-auto max-w-[1000px]"
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#E2E8F0"
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "#CBD5E1" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {offices.map((office, i) => (
              <Marker key={office.name} coordinates={office.mapCoords}>
                {/* Pulsing ring */}
                <motion.circle
                  r={12}
                  fill="#DA291C"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0.4, 0],
                    scale: [1, 2.5] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: i * 0.4,
                    ease: "easeOut"
                  }}
                />
                {/* Main pin */}
                <circle r={5} fill="#DA291C" stroke="white" strokeWidth={2} className="drop-shadow-sm" />
                
                {/* Tooltip Label */}
                <g transform="translate(0, -18)">
                  <rect
                    x="-35"
                    y="-9"
                    width="70"
                    height="18"
                    rx="9"
                    fill="white"
                    stroke="#E2E8F0"
                    strokeWidth={0.5}
                    className="shadow-sm"
                    style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.08))' }}
                  />
                  <text
                    textAnchor="middle"
                    y="3"
                    className="text-[8px] font-bold fill-slate-800 uppercase tracking-tight"
                    style={{ fontSize: '8px', fontWeight: 800 }}
                  >
                    {office.name}
                  </text>
                </g>
              </Marker>
            ))}
          </ComposableMap>
        </motion.div>

        {/* Summary Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12">
          {offices.map((office, i) => (
            <motion.div
              key={office.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                {office.initials}
              </span>
              <div className="flex flex-col">
                <p className="text-sm font-bold text-foreground leading-none">{office.name}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">{office.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
