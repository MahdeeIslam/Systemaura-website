import { cn } from "@/lib/cn";

/* ============================================================================
   NodeNetwork — the site's signature "connected systems" motif.
   A fixed (deterministic, SSR-safe) graph of nodes and wires that drifts gently
   and pulses softly. All motion is CSS-driven, so prefers-reduced-motion (see
   globals.css) freezes it into a clean static graph. Used boldly behind the
   hero and quietly (variant="quiet") as a card/section echo.
   ============================================================================ */

type NodeType = "hub" | "electric" | "copper" | "ambient";

interface Node {
  x: number;
  y: number;
  type: NodeType;
}

// Hand-placed for a balanced, isometric-feeling mesh (viewBox 0 0 400 400).
const NODES: Node[] = [
  { x: 60, y: 78, type: "ambient" }, // 0
  { x: 168, y: 52, type: "electric" }, // 1
  { x: 300, y: 86, type: "ambient" }, // 2
  { x: 352, y: 196, type: "copper" }, // 3
  { x: 248, y: 168, type: "hub" }, // 4
  { x: 118, y: 158, type: "ambient" }, // 5
  { x: 40, y: 232, type: "copper" }, // 6
  { x: 182, y: 258, type: "hub" }, // 7
  { x: 304, y: 300, type: "electric" }, // 8
  { x: 86, y: 342, type: "ambient" }, // 9
  { x: 210, y: 360, type: "ambient" }, // 10
  { x: 344, y: 352, type: "ambient" }, // 11
  { x: 206, y: 120, type: "electric" }, // 12
  { x: 138, y: 320, type: "ambient" }, // 13
];

// Wire connections (node index pairs).
const EDGES: [number, number][] = [
  [0, 1], [1, 12], [12, 2], [2, 3], [3, 4], [4, 12], [1, 5], [5, 6],
  [5, 7], [7, 4], [4, 8], [8, 3], [7, 8], [6, 9], [9, 13], [13, 7],
  [13, 10], [10, 8], [10, 11], [11, 8], [9, 10], [0, 5],
];

// A few edges carry a travelling "data pulse".
const FLOW_EDGES: { edge: [number, number]; dur: number; delay: number }[] = [
  { edge: [1, 12], dur: 3.2, delay: 0 },
  { edge: [4, 8], dur: 3.8, delay: 1.1 },
  { edge: [5, 7], dur: 4.2, delay: 2 },
  { edge: [3, 4], dur: 3.5, delay: 0.6 },
];

const NODE_COLOR: Record<NodeType, string> = {
  hub: "#2563EB",
  electric: "#2563EB",
  copper: "#B87333",
  ambient: "#475569",
};

export function NodeNetwork({
  className,
  variant = "hero",
}: {
  className?: string;
  variant?: "hero" | "quiet";
}) {
  const quiet = variant === "quiet";
  return (
    <div className={cn("pointer-events-none relative", className)} aria-hidden="true">
      {!quiet && (
        <>
          <div className="glow-electric absolute left-[18%] top-[14%] h-64 w-64 opacity-80" />
          <div className="glow-copper absolute bottom-[12%] right-[14%] h-56 w-56 opacity-70" />
        </>
      )}

      <svg
        viewBox="0 0 400 400"
        className={cn("h-full w-full animate-drift", quiet && "opacity-[0.18]")}
        fill="none"
      >
        {/* Wires */}
        <g stroke="#475569" strokeWidth="1">
          {EDGES.map(([a, b], i) => (
            <line
              key={i}
              x1={NODES[a].x}
              y1={NODES[a].y}
              x2={NODES[b].x}
              y2={NODES[b].y}
              strokeOpacity={i % 4 === 0 ? 0.5 : 0.28}
            />
          ))}
        </g>

        {/* Travelling data pulses */}
        {!quiet &&
          FLOW_EDGES.map(({ edge: [a, b], dur, delay }, i) => (
            <circle
              key={`flow-${i}`}
              r="2.4"
              fill={i % 2 === 0 ? "#3b82f6" : "#cd8a4a"}
              style={{
                offsetPath: `path("M ${NODES[a].x} ${NODES[a].y} L ${NODES[b].x} ${NODES[b].y}")`,
                animation: `flow ${dur}s linear ${delay}s infinite`,
                opacity: 0,
              }}
            />
          ))}

        {/* Nodes */}
        {NODES.map((n, i) => {
          const color = NODE_COLOR[n.type];
          const isAnchor = n.type === "hub";
          const r = isAnchor ? 5 : n.type === "ambient" ? 3 : 4;
          return (
            <g key={`node-${i}`}>
              {/* soft halo for accent nodes */}
              {n.type !== "ambient" && (
                <circle cx={n.x} cy={n.y} r={r + 6} fill={color} opacity={0.1} />
              )}
              <circle
                cx={n.x}
                cy={n.y}
                r={r}
                fill={color}
                className={isAnchor ? undefined : "animate-pulse-node"}
                style={
                  isAnchor
                    ? undefined
                    : {
                        transformBox: "fill-box",
                        transformOrigin: "center",
                        animationDelay: `${(i % 6) * 0.6}s`,
                      }
                }
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
