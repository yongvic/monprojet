symboles = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQSTUVWXYZ0123456789"

total = 0

with open("motdepasse.txt", "w") as fichier:
    for a in symboles:
        for b in symboles:
            for c in symboles:
                for d in symboles:
                    for e in symboles:
                        for f in symboles:
                            for g in symboles:
                                for h in symboles:
                                    fichier.write(f"{a}{b}{c}{d}{e}{f}{g}{h}\n")
                                    total = total + 1
                                    print(f"{total} : {a}{b}{c}{d}{e}{f}{g}{h}\n")
