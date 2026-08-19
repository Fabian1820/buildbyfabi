import { useEffect, useMemo, useRef, useState } from 'react';

export type TerminalLine =
	| { kind: 'cmd'; text: string }
	| { kind: 'out'; text: string; tone?: 'default' | 'accent' | 'muted' }
	| { kind: 'tags'; items: string[] }
	| { kind: 'blank' };

type Props = {
	user: string;
	host: string;
	lines: TerminalLine[];
	/** ms per character while typing a command */
	speed?: number;
};

const TYPE_SPEED = 34;
const CMD_PAUSE = 320;
const OUT_PAUSE = 180;

export default function Terminal({ user, host, lines, speed = TYPE_SPEED }: Props) {
	const reduced = useMemo(
		() =>
			typeof window !== 'undefined' &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches,
		[]
	);

	// index of the line currently being revealed; typed = chars revealed on that line
	const [visible, setVisible] = useState(reduced ? lines.length : 0);
	const [typed, setTyped] = useState(0);
	const [done, setDone] = useState(reduced);
	const timers = useRef<number[]>([]);

	useEffect(() => {
		if (reduced) return;
		let cancelled = false;

		const schedule = (fn: () => void, ms: number) => {
			const id = window.setTimeout(() => {
				if (!cancelled) fn();
			}, ms);
			timers.current.push(id);
		};

		const run = (index: number) => {
			if (index >= lines.length) {
				setDone(true);
				return;
			}
			const line = lines[index];

			if (line.kind === 'cmd') {
				let char = 0;
				const tick = () => {
					char += 1;
					setTyped(char);
					if (char < line.text.length) schedule(tick, speed);
					else
						schedule(() => {
							setVisible(index + 1);
							setTyped(0);
							run(index + 1);
						}, CMD_PAUSE);
				};
				schedule(tick, speed);
			} else {
				schedule(() => {
					setVisible(index + 1);
					run(index + 1);
				}, OUT_PAUSE);
			}
		};

		schedule(() => run(0), 500);

		return () => {
			cancelled = true;
			timers.current.forEach(clearTimeout);
			timers.current = [];
		};
	}, [lines, reduced, speed]);

	const rendered = lines.slice(0, visible);
	const typing = !reduced && visible < lines.length ? lines[visible] : null;

	return (
		<div className="w-full overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/5 dark:shadow-black/40">
			{/* barra de título */}
			<div className="flex items-center gap-3 border-b border-border bg-bg-subtle px-4 py-2.5">
				<div className="flex gap-1.5" aria-hidden="true">
					<span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
					<span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
					<span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
				</div>
				<span className="flex-1 truncate text-center font-mono text-[11px] text-faint">
					{user}@{host} — zsh
				</span>
				<div className="w-[42px]" aria-hidden="true" />
			</div>

			{/* cuerpo */}
			<div className="min-h-[248px] px-4 py-4 font-mono text-[12.5px] leading-relaxed sm:min-h-[268px] sm:text-[13px]">
				{rendered.map((line, i) => (
					<Line key={i} line={line} user={user} host={host} />
				))}

				{typing?.kind === 'cmd' && (
					<p className="flex flex-wrap items-baseline gap-x-2">
						<Prompt user={user} host={host} />
						<span className="text-text">
							{typing.text.slice(0, typed)}
							<Caret />
						</span>
					</p>
				)}

				{done && (
					<p className="flex flex-wrap items-baseline gap-x-2">
						<Prompt user={user} host={host} />
						<Caret />
					</p>
				)}
			</div>
		</div>
	);
}

function Prompt({ user, host }: { user: string; host: string }) {
	return (
		<span className="shrink-0 select-none">
			<span className="text-accent">{user}</span>
			<span className="text-faint">@</span>
			<span className="text-muted">{host}</span>
			<span className="text-faint"> ~ </span>
			<span className="text-accent">$</span>
		</span>
	);
}

function Caret() {
	return (
		<span
			className="ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] bg-accent animate-blink"
			aria-hidden="true"
		/>
	);
}

function Line({ line, user, host }: { line: TerminalLine; user: string; host: string }) {
	if (line.kind === 'blank') return <div className="h-3" />;

	if (line.kind === 'cmd')
		return (
			<p className="flex flex-wrap items-baseline gap-x-2">
				<Prompt user={user} host={host} />
				<span className="text-text">{line.text}</span>
			</p>
		);

	if (line.kind === 'tags')
		return (
			<p className="flex flex-wrap gap-x-3 gap-y-1 pb-0.5">
				{line.items.map((item) => (
					<span key={item} className="text-muted">
						{item}
					</span>
				))}
			</p>
		);

	const tone =
		line.tone === 'accent' ? 'text-accent' : line.tone === 'muted' ? 'text-faint' : 'text-muted';
	return <p className={tone}>{line.text}</p>;
}
