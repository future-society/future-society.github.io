# -*- coding: utf-8 -*-
"""Generates the LinkedIn company-page cover for the Future Society Hub.

Run: python3 linkedin-banner.py <out-dir>
Then rasterise, e.g.:
  inkscape linkedin-banner-light.svg --export-type=png \
    --export-filename=linkedin-banner-light.png --export-width=2256 --export-height=382

To resize the artwork, change SCALE and nothing else: the block is measured with
the real font metrics and right-aligned to RIGHT_MARGIN, so shrinking the type
automatically pushes it further clear of the logo tile LinkedIn overlays on the
left of the cover.
"""
import io, sys
from PIL import ImageFont

# LinkedIn company cover: 1128 x 191 display size, rendered at 2x for retina.
W, H = 1128, 191
RIGHT_MARGIN = 250
SCALE = 0.70

FONT = '/usr/share/fonts/opentype/inter/Inter-%s.otf'

HEADLINE = 'where tech and society fuse'
EYEBROW = 'FUTURE SOCIETY HUB'

h_size, h_track = 40 * SCALE, -0.4 * SCALE
e_size, e_track = 14 * SCALE, 3.4 * SCALE
trace_w = 190.0 * SCALE

# The circuit trace from assets/circuit-line-accent.svg: a rule terminating in
# an open node, used here in place of the site's plain accent bar. Source
# viewBox is 101.46 x 13.01; the node centre sits at y=6.47.
CIRCUIT = ("M95.19,13.01c3.4-.12,6.21-2.99,6.27-6.39.03-1.76-.63-3.42-1.87-4.67-1.23-1.25-2.88-1.94-4.64-1.94-3.21,0-5.95,2.39-6.43,"
           "5.53H0v1.95h88.52c.49,3.25,3.38,5.64,6.67,5.53ZM91.73,3.29c.86-.86,2-1.33,3.22-1.33s2.36.47,3.22,1.33c.86.86,1.33,2,1.33,"
           "3.22s-.47,2.36-1.33,3.22c-.86.86-2,1.33-3.22,1.33s-2.36-.47-3.22-1.33c-.86-.86-1.33-2-1.33-3.22s.47-2.36,1.33-3.22Z")
CW, CNODE_Y = 101.46, 6.47

THEMES = {
    # #00802F is the site accent; it lacks contrast on black, hence the
    # brighter green in the dark variant.
    'light': dict(bg='#ffffff', ink='#111111', muted='#999999', accent='#00802F'),
    'dark':  dict(bg='#111111', ink='#ffffff', muted='#8a8a8a', accent='#00A83E'),
}

def text_width(txt, size, style, track):
    f = ImageFont.truetype(FONT % style, int(round(size)))
    return f.getlength(txt) * (size / int(round(size))) + track * (len(txt) - 1)

TPL = u'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">
  <rect width="{W}" height="{H}" fill="{bg}"/>

  <g transform="translate({sx},{cy}) scale({cs})">
    <path d="{circuit}" fill="{accent}"/>
  </g>

  <text x="{sx}" y="{ey}" font-family="Inter" font-size="{es:.2f}" font-weight="500"
        letter-spacing="{et:.2f}" fill="{muted}">{eyebrow}</text>

  <text x="{sx}" y="{hy}" font-family="Inter" font-size="{hs:.2f}" font-weight="400"
        letter-spacing="{ht:.2f}" fill="{ink}">where tech and society <tspan fill="{accent}" font-weight="600">fuse</tspan></text>
</svg>
'''

def build(theme):
    # The headline is the widest element, so it sets the left edge of the block.
    sx = W - RIGHT_MARGIN - text_width(HEADLINE, h_size, 'Regular', h_track)

    cs = trace_w / CW
    trace_h = 13.01 * cs
    gap1, gap2 = 20 * SCALE, 27 * SCALE          # trace -> eyebrow -> headline
    e_cap, h_cap, h_desc = e_size * 0.727, h_size * 0.727, h_size * 0.21

    # Stack the three rows, then centre the whole block vertically.
    block = trace_h + gap1 + e_cap + gap2 + h_cap + h_desc
    top = (H - block) / 2.0
    cy = top
    ey = top + trace_h + gap1 + e_cap
    hy = ey + gap2 + h_cap

    return TPL.format(W=W, H=H, sx=round(sx, 1), circuit=CIRCUIT, cs=cs,
                      cy=round(cy, 2), ey=round(ey, 1), hy=round(hy, 1),
                      es=e_size, et=e_track, hs=h_size, ht=h_track,
                      eyebrow=EYEBROW, **THEMES[theme])

if __name__ == '__main__':
    for theme in THEMES:
        p = '%s/linkedin-banner-%s.svg' % (sys.argv[1], theme)
        io.open(p, 'w', encoding='utf-8').write(build(theme))
        print(p)
