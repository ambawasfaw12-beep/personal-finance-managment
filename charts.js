const ctx = chart.getContext('2d')
const maxValue = Math.max(...transactions.map(item => item.amount))
const width = chart.width
const height = chart.height

const padding = 50
const chartWidth = width - (padding + padding)
const chartHeight = height - (padding + padding)

ctx.lineWidth = 3
ctx.beginPath()
ctx.strokeStyle = '#fefefe'
ctx.moveTo(padding, padding)
ctx.lineTo(padding, height - padding)
ctx.lineTo(width - padding, height - padding)
ctx.stroke()

const tricks = 6
ctx.textAlign = 'right'
ctx.textBaseline = 'middle'
ctx.font = '12px arial'

for (let i = 0; i <= tricks; i++) {
    const value = ((maxValue * i) / tricks).toFixed(0)
    
    const y = (height - padding) - (chartHeight * i) / tricks

    ctx.beginPath()
    ctx.strokeStyle = i === 0? 'black': 'gray'
    ctx.moveTo(padding, y)
    ctx.lineTo(width - padding, y)
    ctx.stroke()

    ctx.fillText(value, padding- 10, y)
}

const barGap = 30
const totalGap = 4
const barWidth = (chartWidth - (barGap + totalGap))/transactions.length

transactions.forEach((item, index) => {
    const x = padding + barGap + index*(barWidth + barGap)
    const barHeight = (item.amount/maxValue)*chartHeight
    const y = (height - padding) - barHeight

    ctx.beginPath()
    ctx.fillStyle = '#3b83f6'
    ctx.fillRect(x, y, barWidth, barHeight)
    
    ctx.fillStyle = '#666666'
    ctx.fillText(item.type, x + (barWidth/2), height - padding + 10)
});