"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Home,
  Calendar,
  Lightbulb,
  Settings,
  Moon,
  Sun,
  Play,
  Pause,
  Plus,
  Baby,
  Clock,
  TrendingUp,
  Heart,
} from "lucide-react"

export default function DodoZenApp() {
  const [activeTab, setActiveTab] = useState("accueil")
  const [isNightMode, setIsNightMode] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [sleepTimer, setSleepTimer] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [selectedBaby, setSelectedBaby] = useState("Emma")

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      if (isTimerRunning) {
        setSleepTimer((prev) => prev + 1)
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [isTimerRunning])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const babies = [
    { name: "Emma", age: "6 mois", avatar: "👶" },
    { name: "Lucas", age: "2 ans", avatar: "🧒" },
  ]

  const sleepData = {
    Emma: {
      lastSleep: "14h30 - 16h15",
      nextRecommended: "19h30",
      totalToday: "11h 45min",
      quality: 85,
      status: "Bien reposée",
    },
  }

  const recommendations = [
    {
      time: "19h30",
      type: "Coucher",
      reason: "Basé sur les cycles naturels d'Emma",
      confidence: 92,
    },
    {
      time: "Dans 2h",
      type: "Sieste courte",
      reason: "Signes de fatigue détectés",
      confidence: 78,
    },
  ]

  const sleepHistory = [
    { date: "Aujourd'hui", naps: 3, total: "11h 45min", quality: 85 },
    { date: "Hier", naps: 2, total: "12h 15min", quality: 90 },
    { date: "Avant-hier", naps: 4, total: "10h 30min", quality: 75 },
  ]

  const tips = [
    {
      title: "Le rituel du coucher",
      content: "Créez une routine apaisante 30 minutes avant le coucher : bain tiède, massage doux, berceuse...",
      duration: "3 min",
      category: "Routine",
    },
    {
      title: "Reconnaître les signes de fatigue",
      content: "Bâillements, frottement des yeux, agitation... Apprenez à décoder les signaux de votre bébé.",
      duration: "2 min",
      category: "Observation",
    },
    {
      title: "L'environnement idéal",
      content: "Température entre 18-20°C, obscurité, silence... Optimisez la chambre de bébé.",
      duration: "4 min",
      category: "Environnement",
    },
  ]

  const renderAccueil = () => (
    <div className="space-y-6 p-4">
      {/* En-tête avec sélection bébé */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Bonjour ! 👋</h1>
          <p className="text-slate-600">Comment va {selectedBaby} aujourd'hui ?</p>
        </div>
        <div className="flex gap-2">
          {babies.map((baby) => (
            <Button
              key={baby.name}
              variant={selectedBaby === baby.name ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedBaby(baby.name)}
              className="rounded-full"
            >
              {baby.avatar} {baby.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Statut actuel */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Moon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">État actuel</h3>
                <p className="text-sm text-slate-600">{sleepData.Emma.status}</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              <Heart className="w-3 h-3 mr-1" />
              Paisible
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-slate-500 mb-1">Dernier sommeil</p>
              <p className="font-medium text-slate-800">{sleepData.Emma.lastSleep}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">Total aujourd'hui</p>
              <p className="font-medium text-slate-800">{sleepData.Emma.totalToday}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chronomètre de sieste */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600" />
            Chronomètre de sieste
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <div className="text-4xl font-mono font-bold text-slate-800">{formatTime(sleepTimer)}</div>
            <div className="flex gap-2 justify-center">
              <Button onClick={() => setIsTimerRunning(!isTimerRunning)} className="rounded-full" size="lg">
                {isTimerRunning ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
                {isTimerRunning ? "Pause" : "Démarrer"}
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setSleepTimer(0)
                  setIsTimerRunning(false)
                }}
                className="rounded-full"
                size="lg"
              >
                Reset
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Prochaine recommandation */}
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-0">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Recommandation</h3>
              <p className="text-sm text-slate-600">Prochain coucher optimal</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-slate-800">{sleepData.Emma.nextRecommended}</p>
                <p className="text-sm text-slate-600">Dans 3h 15min</p>
              </div>
              <Badge className="bg-amber-100 text-amber-700">92% de confiance</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Qualité du sommeil */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            Qualité du sommeil
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Score aujourd'hui</span>
              <span className="font-semibold text-slate-800">{sleepData.Emma.quality}%</span>
            </div>
            <Progress value={sleepData.Emma.quality} className="h-2" />
            <p className="text-xs text-slate-500">Excellent ! Emma a eu un sommeil réparateur.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderHistorique = () => (
    <div className="space-y-4 p-4">
      <h2 className="text-xl font-bold text-slate-800 mb-4">Historique du sommeil</h2>

      {sleepHistory.map((day, index) => (
        <Card key={index}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-slate-800">{day.date}</h3>
              <Badge variant={day.quality >= 85 ? "default" : day.quality >= 70 ? "secondary" : "destructive"}>
                {day.quality}%
              </Badge>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-slate-500">Siestes</p>
                <p className="font-medium">{day.naps}</p>
              </div>
              <div>
                <p className="text-slate-500">Total</p>
                <p className="font-medium">{day.total}</p>
              </div>
              <div>
                <p className="text-slate-500">Qualité</p>
                <Progress value={day.quality} className="h-1 mt-1" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button className="w-full rounded-full bg-transparent" variant="outline">
        <Plus className="w-4 h-4 mr-2" />
        Ajouter une sieste manuellement
      </Button>
    </div>
  )

  const renderRecommandations = () => (
    <div className="space-y-4 p-4">
      <h2 className="text-xl font-bold text-slate-800 mb-4">Recommandations</h2>

      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <Card key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-slate-800">{rec.type}</h3>
                <Badge className="bg-blue-100 text-blue-700">{rec.confidence}%</Badge>
              </div>
              <p className="text-2xl font-bold text-slate-800 mb-1">{rec.time}</p>
              <p className="text-sm text-slate-600">{rec.reason}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Conseils du jour</h3>
        <div className="space-y-3">
          {tips.map((tip, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-slate-800">{tip.title}</h4>
                  <Badge variant="outline" className="text-xs">
                    {tip.duration}
                  </Badge>
                </div>
                <p className="text-sm text-slate-600 mb-2">{tip.content}</p>
                <Badge variant="secondary" className="text-xs">
                  {tip.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  const renderParametres = () => (
    <div className="space-y-4 p-4">
      <h2 className="text-xl font-bold text-slate-800 mb-4">Paramètres</h2>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Mes bébés</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {babies.map((baby, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{baby.avatar}</div>
                <div>
                  <p className="font-medium text-slate-800">{baby.name}</p>
                  <p className="text-sm text-slate-600">{baby.age}</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Modifier
              </Button>
            </div>
          ))}
          <Button className="w-full rounded-full bg-transparent" variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Ajouter un bébé
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Préférences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-slate-800">Mode nuit automatique</p>
              <p className="text-sm text-slate-600">Active le thème sombre le soir</p>
            </div>
            <Button
              variant={isNightMode ? "default" : "outline"}
              size="sm"
              onClick={() => setIsNightMode(!isNightMode)}
            >
              {isNightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-slate-800">Notifications</p>
              <p className="text-sm text-slate-600">Rappels pour les siestes</p>
            </div>
            <Button variant="outline" size="sm">
              Configurer
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-slate-800">Sauvegarde cloud</p>
              <p className="text-sm text-slate-600">Synchroniser vos données</p>
            </div>
            <Button variant="outline" size="sm">
              Activer
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Support</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            Centre d'aide
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Nous contacter
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            À propos de DodoZen
          </Button>
        </CardContent>
      </Card>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case "accueil":
        return renderAccueil()
      case "historique":
        return renderHistorique()
      case "recommandations":
        return renderRecommandations()
      case "parametres":
        return renderParametres()
      default:
        return renderAccueil()
    }
  }

  return (
    <div
      className={`min-h-screen ${isNightMode ? "bg-slate-900" : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"}`}
    >
      {/* Header */}
      <div className={`sticky top-0 z-10 ${isNightMode ? "bg-slate-800" : "bg-white/80"} backdrop-blur-sm border-b`}>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
              <Baby className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-lg font-bold ${isNightMode ? "text-white" : "text-slate-800"}`}>DodoZen</h1>
              <p className={`text-xs ${isNightMode ? "text-slate-300" : "text-slate-600"}`}>
                {currentTime.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsNightMode(!isNightMode)} className="rounded-full">
            {isNightMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="pb-20">{renderContent()}</div>

      {/* Bottom Navigation */}
      <div className={`fixed bottom-0 left-0 right-0 ${isNightMode ? "bg-slate-800" : "bg-white"} border-t`}>
        <div className="flex items-center justify-around p-2">
          {[
            { id: "accueil", icon: Home, label: "Accueil" },
            { id: "historique", icon: Calendar, label: "Historique" },
            { id: "recommandations", icon: Lightbulb, label: "Conseils" },
            { id: "parametres", icon: Settings, label: "Paramètres" },
          ].map((tab) => (
            <Button
              key={tab.id}
              variant="ghost"
              className={`flex flex-col items-center gap-1 h-auto py-2 px-3 rounded-xl ${
                activeTab === tab.id
                  ? isNightMode
                    ? "bg-slate-700 text-white"
                    : "bg-blue-100 text-blue-600"
                  : isNightMode
                    ? "text-slate-400"
                    : "text-slate-600"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{tab.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
} 