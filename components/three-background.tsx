"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    // Create network nodes representing cloud infrastructure
    const nodeGeometry = new THREE.SphereGeometry(0.05, 16, 16)
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.8,
    })

    const nodes: THREE.Mesh[] = []
    const nodeCount = 50

    // Create nodes in 3D space
    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone())
      node.position.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10)
      nodes.push(node)
      scene.add(node)
    }

    // Create connections between nearby nodes
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.2,
    })

    const lines: THREE.Line[] = []
    const maxDistance = 2

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position)
        if (distance < maxDistance) {
          const points = []
          points.push(nodes[i].position)
          points.push(nodes[j].position)
          const geometry = new THREE.BufferGeometry().setFromPoints(points)
          const line = new THREE.Line(geometry, lineMaterial)
          lines.push(line)
          scene.add(line)
        }
      }
    }

    // Add ambient particles
    const particleGeometry = new THREE.BufferGeometry()
    const particleCount = 200
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x94a3b8,
      size: 0.02,
      transparent: true,
      opacity: 0.6,
    })
    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    // Mouse interaction
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate the entire scene slowly
      scene.rotation.y += 0.0005
      scene.rotation.x += 0.0002

      // Pulse nodes
      nodes.forEach((node, index) => {
        const scale = 1 + Math.sin(Date.now() * 0.001 + index) * 0.2
        node.scale.set(scale, scale, scale)
      })

      // Rotate particles
      particles.rotation.y += 0.0003
      particles.rotation.x += 0.0001

      // Mouse parallax effect
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.02
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      renderer.dispose()
      nodeGeometry.dispose()
      nodeMaterial.dispose()
      lineMaterial.dispose()
      particleGeometry.dispose()
      particleMaterial.dispose()
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 -z-10 opacity-40" style={{ pointerEvents: "none" }} />
}
